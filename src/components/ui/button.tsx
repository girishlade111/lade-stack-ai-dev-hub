import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl",
        outline: "border-2 border-border bg-background hover:bg-accent/10 hover:border-primary/50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] rounded-xl",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] rounded-xl",
        ghost: "hover:bg-accent/10 hover:text-accent transition-all duration-300 rounded-xl",
        link: "text-primary underline-offset-4 hover:underline transition-all duration-300",
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-2xl hover:shadow-primary/25 hover:scale-[1.02] shadow-xl transition-all duration-500 font-semibold rounded-xl relative overflow-hidden",
        success: "bg-success text-success-foreground hover:bg-success/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-xl px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
