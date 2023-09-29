import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";

export const buttonVariants = cva(
  "active:scale-95 group leading-6 rounded-lg text-base gap-2 inline-flex items-center justify-center rounded-md text-sm md:text-base font-semibold transition-color focus:outline-none disabled:opacity-50 disabled:pointer-events-none hover:scale-110 hover:opacity-100 transition-all",
  {
    variants: {
      variant: {
        default: " bg-green text-dark_Green ",
        darkgreen: " bg-dark_Green text-green  ",
        gradiend: "gradient-background-green text-dark_Green",
        transparent: "bg-transparent text-green",
      },
      size: {
        default: "py-3 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}
const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
