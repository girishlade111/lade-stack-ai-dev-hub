import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [copiedNormal, setCopiedNormal] = useState(false);
  const [copiedEnhanced, setCopiedEnhanced] = useState(false);

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
          className="h-8 px-2"
          aria-label={`Copy ${type} code`}
        >
          {copiedNormal && type === 'normal' ? (
            <Check className="w-4 h-4 text-success" />
          ) : copiedEnhanced && type === 'enhanced' ? (
            <Check className="w-4 h-4 text-success" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <pre className="bg-muted/50 rounded-lg p-4 overflow-x-auto text-sm font-mono">
        <code className="text-foreground/90">{code}</code>
      </pre>
    </div>
  );

  return (
    <section id="code-comparison" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          </div>

          {/* Code Comparison */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center">
                Normal vs Enhanced by Lade Stack's AI editor
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Tabs defaultValue="normal" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="normal" className="text-sm sm:text-base">
                    Normal Code
                  </TabsTrigger>
                  <TabsTrigger value="enhanced" className="text-sm sm:text-base">
                    Enhanced Code
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="normal" className="mt-0">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Standard code with basic functionality and minimal error handling.
                    </p>
                    <CodeBlock code={normalCode} type="normal" />
                  </div>
                </TabsContent>
                
                <TabsContent value="enhanced" className="mt-0">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Enhanced by Lade Stack's AI editor with better practices, error handling, and performance optimizations.
                    </p>
                    <CodeBlock code={enhancedCode} type="enhanced" />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DualCodeSection;