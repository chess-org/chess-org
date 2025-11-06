import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  bgGradient?: boolean;
}

const SectionWrapper = ({ children, className, title, subtitle, bgGradient }: SectionWrapperProps) => {
  return (
    <section className={cn(
      "py-20 px-4",
      bgGradient && "bg-gradient-card",
      className
    )}>
      <div className="container mx-auto max-w-6xl">
        {(title || subtitle) && (
          <div className="text-center mb-16 animate-fade-in">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
