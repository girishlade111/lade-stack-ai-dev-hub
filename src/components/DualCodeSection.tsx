import { useState, useMemo } from 'react';
import { Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CodeSectionProps {
  normalCode: string;
  enhancedCode: string;
  title?: string;
  description?: string;
}

const DualCodeSection = ({ 
  normalCode, 
  enhancedCode, 
  title = "Code Transformation", 
  description = "See how our AI editor transforms your code" 
}: CodeSectionProps) => {
  const [activeTab, setActiveTab] = useState<'normal' | 'enhanced'>('normal');
  const [copiedNormal, setCopiedNormal] = useState(false);
  const [copiedEnhanced, setCopiedEnhanced] = useState(false);

  // Memoize code blocks to prevent unnecessary re-renders
  const codeBlocks = useMemo(() => ({
    normal: normalCode,
    enhanced: enhancedCode
  }), [normalCode, enhancedCode]);

  const copyToClipboard = async (text: string, type: 'normal' | 'enhanced') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'normal') {
        setCopiedNormal(true);
        setTimeout(() => setCopiedNormal(false), 2000);
      } else {
        setCopiedEnhanced(true);
        setTimeout(() => setCopiedEnhanced(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const CodeBlock = ({ code, type }: { code: string; type: 'normal' | 'enhanced' }) => (
    <div className="relative">
      <div className="flex items-center justify-between mb-2">
        <Badge variant={type === 'normal' ? 'secondary' : 'default'}>
          {type === 'normal' ? 'Normal' : 'Enhanced'}
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(code, type)}
          className="h-8 px-2 touch-target touch-manipulation"
          aria-label={`Copy ${type} code`}
        >
          {(copiedNormal && type === 'normal') || (copiedEnhanced && type === 'enhanced') ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <pre className="bg-muted/50 rounded-lg p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm font-mono">
        <code className="text-foreground/90 whitespace-pre-wrap">{code}</code>
      </pre>
    </div>
  );

  return (
    <section id="code-comparison" className="py-8 sm:py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header - Mobile optimized */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Code Comparison - Mobile-first */}
          <Card className="border-2 hover:shadow-lg transition-fast performance-optimized">
            <CardHeader className="p-4">
              <CardTitle className="text-lg sm:text-xl text-center">
                Normal vs Enhanced by Lade Stack's AI editor
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-4">
              {/* Simple tab alternative for better mobile performance */}
              <div className="flex gap-1 bg-muted/50 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('normal')}
                  className={`flex-1 py-2 px-3 rounded text-xs font-medium transition-fast touch-target ${
                    activeTab === 'normal'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Normal Code
                </button>
                <button
                  onClick={() => setActiveTab('enhanced')}
                  className={`flex-1 py-2 px-3 rounded text-xs font-medium transition-fast touch-target ${
                    activeTab === 'enhanced'
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Enhanced Code
                </button>
              </div>
              
              <div className="space-y-3">
                {activeTab === 'normal' ? (
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Standard code with basic functionality and minimal error handling.
                    </p>
                    <CodeBlock code={codeBlocks.normal} type="normal" />
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Enhanced by Lade Stack's AI editor with better practices, error handling, and performance optimizations.
                    </p>
                    <CodeBlock code={codeBlocks.enhanced} type="enhanced" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DualCodeSection;