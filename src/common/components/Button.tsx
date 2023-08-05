import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/common/utils";

const buttonVariants = cva(
	"flex justify-center align-middle itmes-center mx-auto p-2 font-medium text-primary-100",
	{
		variants: {
			variant: {
				default: "bg-primary-900 text-primary-300",
				disabled: "bg-gray-400 text-white",
			},
			size: {
				default: "h-12 w-5/6 rounded-xl text-lg",
				small: "h-6 w-12 text-xs rounded-md",
			},
			defaultVariants: {
				variant: "default",
				size: "default",
			},
		},
	}
);

interface buttonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	className?: string;
	message?: string;
	children?: React.ReactNode;
}

const Button: FC<buttonProps> = ({
	variant,
	className,
	size,
	children,
	...props
}) => {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</button>
	);
};

export { Button, buttonVariants };
