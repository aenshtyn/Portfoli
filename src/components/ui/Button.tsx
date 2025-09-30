import { cloneElement, forwardRef, isValidElement } from "react";
import type { ButtonHTMLAttributes, ReactElement } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: "md" | "lg" | "sm";
  asChild?: boolean;
};

const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-foreground/95 hover:bg-primary-soft hover:text-white shadow-lg shadow-primary/20",
  secondary:
    "bg-secondary/10 text-secondary hover:bg-secondary/20 border border-secondary/30",
  ghost:
    "border border-white/10 text-foreground/80 hover:bg-white/5",
};

const sizeStyles = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-11 px-6 text-sm rounded-xl",
  lg: "h-12 px-7 text-base rounded-2xl",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      children,
      type,
      ...rest
    },
    ref
  ) => {
    const composedClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        ...rest,
        className: cn(composedClassName, (children.props as { className?: string }).className),
      });
    }

    return (
      <button ref={ref} className={composedClassName} type={type ?? "button"} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
