"use client";
import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/common/utils";

const buttonVariants = cva(
	"flex justify-center align-middle items-center mx-auto p-2 font-medium text-lg text-primary-100 cursor-pointer",
	{
		variants: {
			variant: {
				default: "bg-primary-900 text-primary-300",
				disabled: "bg-gray-400 text-white",
			},
			size: {
				default: "h-12 w-5/6 rounded-xl",
				small: "h-6 text-xs rounded-md",
			},
			defaultVariants: {
				variant: "default",
				size: "default",
			},
		},
	}
);

interface buttonProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof buttonVariants> {
	className?: string;
	message?: string;
	children?: React.ReactNode;
}

const ButtonContainer: FC<buttonProps> = ({
	variant,
	className,
	size,
	children,
	...props
}) => {
	return (
		<div
			className={cn(buttonVariants({ variant, className, size }))}
			{...props}
		>
			{children}
		</div>
	);
};

export { ButtonContainer, buttonVariants };
