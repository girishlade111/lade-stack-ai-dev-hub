import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Code,
  FileText,
  Globe,
  Upload,
  Blocks,
  FlaskConical,
  Home,
  User,
  Mail,
  Layers,
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const products: SearchItem[] = [
  {
    id: "code-editor",
    title: "AI Code Editor",
    description: "Smart coding assistant powered by AI.",
    href: "/projects/lade-code",
    icon: <Code className="h-4 w-4" />,
  },
  {
    id: "api-testing",
    title: "API Testing Platform",
    description: "Test and debug APIs with real-time feedback.",
    href: "/api-testing-platform",
    icon: <FlaskConical className="h-4 w-4" />,
  },
  {
    id: "documentation-ai",
    title: "Documentation AI",
    description: "Summarize and generate technical documentation.",
    href: "/ai-code-viewer-ai",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: "file-sharing",
    title: "File Sharing",
    description: "Secure file management and sharing platform.",
    href: "/file-sharing-platform",
    icon: <Upload className="h-4 w-4" />,
  },
  {
    id: "no-code-builder",
    title: "No-Code Builder",
    description: "Build websites without writing code.",
    href: "/projects/lade-builder",
    icon: <Blocks className="h-4 w-4" />,
  },
];

const pages: SearchItem[] = [
  {
    id: "home",
    title: "Home",
    description: "Back to homepage.",
    href: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    id: "about",
    title: "About Us",
    description: "Learn about Lade Stack and our mission.",
    href: "/about",
    icon: <User className="h-4 w-4" />,
  },
  {
    id: "products",
    title: "All Products",
    description: "Browse the full product catalog.",
    href: "/apps",
    icon: <Layers className="h-4 w-4" />,
  },
  {
    id: "blog",
    title: "Blog",
    description: "Read the latest articles and tutorials.",
    href: "/blog",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    id: "contact",
    title: "Contact",
    description: "Get in touch with us.",
    href: "/contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const navigate = useNavigate();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSelect = useCallback(
    (href: string) => {
      onOpenChange(false);
      navigate(href);
    },
    [navigate, onOpenChange]
  );

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search products, pages, articles..." />
      <div
        className="max-h-[380px] overflow-y-auto overscroll-contain"
        onWheel={(e) => e.stopPropagation()}
      >
        <CommandList className="max-h-none scroll-smooth">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Products">
            {products.map((item) => (
              <CommandItem
                key={item.id}
                value={item.title}
                onSelect={() => handleSelect(item.href)}
                className="cursor-pointer"
              >
                <span className="mr-2 text-muted-foreground">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Pages">
            {pages.map((item) => (
              <CommandItem
                key={item.id}
                value={item.title}
                onSelect={() => handleSelect(item.href)}
                className="cursor-pointer"
              >
                <span className="mr-2 text-muted-foreground">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </div>
    </CommandDialog>
  );
}
