"use client";
import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("rounded-xl m-auto text-lg", {
	variants: {
		variant: {
			default: "bg-primary-900 text-primary-300",
			disabled: "bg-gray-400 text-white",
		},
		size: {
			default: "flex justify-center py-2 h-12 w-5/6 mx-auto",
			small: "h-6 w-16 text-xs",
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
});

interface buttonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	className?: string;
	message: string;
}

const Button: FC<buttonProps> = ({ variant, className, size, ...props }) => {
	return (
		<button
			className={cn(buttonVariants({ variant, className, size }))}
			{...props}
		>
			{props.message}
		</button>
	);
};

export { Button, buttonVariants };
