import { useEffect, useRef, useCallback, useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const vertexShaderSource = `#version 300 es
precision mediump float;
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform vec2 uPointer;

out vec4 fragColor;

float hash21(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 5; i++) {
    val += amp * noise(p * freq);
    amp *= 0.5;
    freq *= 2.0;
  }
  return val;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;

  float t = uTime * 0.18;

  vec2 pointer = (uPointer - 0.5) * 0.4;
  p += pointer * 0.08;

  float n1 = fbm(p * 2.5 + t * 0.6);
  float n2 = fbm(p * 1.8 - t * 0.4 + vec2(5.2, 1.3));
  float n3 = fbm(p * 3.5 + vec2(n1, n2) * 0.6);

  float pattern = n1 * 0.4 + n2 * 0.35 + n3 * 0.25;

  float dist = length(p - pointer * 0.3);
  float glow = exp(-dist * 2.0) * 0.5;

  vec3 col = vec3(0.0);

  float d = pattern;
  col = mix(col, vec3(d * 0.05, d * 0.35, d * 0.18), d);

  float n4 = fbm(p * 2.0 + t * 0.2 + 10.0);
  col += vec3(n4 * 0.02, n4 * 0.07, n4 * 0.04) * 0.5;

  col += vec3(0.02, 0.10, 0.06) * glow;

  float vignette = 1.0 - dot(uv - 0.5, uv - 0.5) * 1.2;
  col *= max(vignette, 0.0);

  col = clamp(col, 0.0, 1.0);
  fragColor = vec4(col, 1.0);
}`;

class WebGLRenderer {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram | null = null;
  private timeLocation: WebGLUniformLocation | null = null;
  private resolutionLocation: WebGLUniformLocation | null = null;
  private pointerLocation: WebGLUniformLocation | null = null;
  private startTime: number;
  private pointer = { x: 0.5, y: 0.5 };
  private targetPointer = { x: 0.5, y: 0.5 };

  constructor(gl: WebGL2RenderingContext) {
    this.gl = gl;
    this.startTime = performance.now();
    this.init();
  }

  private createShader(type: number, source: string): WebGLShader | null {
    const shader = this.gl.createShader(type);
    if (!shader) return null;
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      this.gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  private init() {
    const gl = this.gl;
    const vs = this.createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fs = this.createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vs || !fs) return;

    this.program = gl.createProgram();
    if (!this.program) return;

    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);

    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) return;

    gl.useProgram(this.program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(this.program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    this.timeLocation = gl.getUniformLocation(this.program, "uTime");
    this.resolutionLocation = gl.getUniformLocation(this.program, "uResolution");
    this.pointerLocation = gl.getUniformLocation(this.program, "uPointer");
  }

  setPointer(x: number, y: number) {
    this.targetPointer.x = x;
    this.targetPointer.y = y;
  }

  resize(width: number, height: number) {
    this.gl.viewport(0, 0, width, height);
  }

  render() {
    const gl = this.gl;
    if (!this.program) return;

    this.pointer.x += (this.targetPointer.x - this.pointer.x) * 0.05;
    this.pointer.y += (this.targetPointer.y - this.pointer.y) * 0.05;

    const time = (performance.now() - this.startTime) / 1000;
    gl.uniform1f(this.timeLocation, time);
    gl.uniform2f(this.resolutionLocation, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(this.pointerLocation, this.pointer.x, this.pointer.y);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose() {
    if (this.program) {
      this.gl.deleteProgram(this.program);
    }
  }
}

export default function AboutDarkShader() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const rafRef = useRef<number>(0);
  const [isMobile] = useState(() =>
    typeof window !== "undefined" && window.innerWidth < 768
  );

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Skip on mobile or reduced-motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const enabled = isDark && !isMobile && !prefersReducedMotion;

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !rendererRef.current) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = Math.min(1.5, window.devicePixelRatio);
    canvas.width = parent.offsetWidth * dpr;
    canvas.height = parent.offsetHeight * dpr;
    rendererRef.current.resize(canvas.width, canvas.height);
  }, []);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !rendererRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = 1.0 - (e.clientY - rect.top) / rect.height;
    rendererRef.current.setPointer(x, y);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      powerPreference: "low-power",
    }) as WebGL2RenderingContext | null;

    if (!gl) return;

    const renderer = new WebGLRenderer(gl);
    rendererRef.current = renderer;

    // Size to parent section
    const parent = canvas.parentElement;
    if (parent) {
      const dpr = Math.min(1.5, window.devicePixelRatio);
      canvas.width = parent.offsetWidth * dpr;
      canvas.height = parent.offsetHeight * dpr;
      renderer.resize(canvas.width, canvas.height);
    }

    // Frame-limited animation loop + visibility pause
    let lastFrame = 0;
    const frameInterval = 1000 / 30; // 30fps cap
    let paused = false;

    const animate = (now: number) => {
      if (!paused) {
        if (now - lastFrame >= frameInterval) {
          renderer.render();
          lastFrame = now;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    // Pause when tab hidden
    const onVisibility = () => {
      paused = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      renderer.dispose();
      rendererRef.current = null;
    };
  }, [enabled, handleResize, handlePointerMove]);

  // No canvas in DOM when not enabled
  if (!enabled) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
