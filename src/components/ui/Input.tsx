import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, FC } from "react";

export const inputVariants = cva(
  "border-none w-full outline-none rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default: "text-white bg-box px-4 py-[0.63rem] md:py-3 md:px-6",
      },
      //   size: { default: "px-4 py-[0.63rem] md:py-3 md:px-6" },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input: FC<InputProps> = ({ className, variant, children, ...props }) => {
  return (
    <input
      type="text"
      className={cn(inputVariants({ className, variant }))}
      {...props}
    />
  );
};

export default Input;
