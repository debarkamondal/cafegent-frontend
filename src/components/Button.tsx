"use client";
import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"flex justify-center w-5/6 mx-auto mt-6 p-2 h-12 rounded-xl text-lg",
	{
		variants: {
			variant: {
				default: "bg-primary-900 text-primary-300",
				disabled: "bg-gray-400 text-white",
			},
			defaultVariants: {
				variant: "default",
			},
		},
	}
);

interface buttonProps
	extends React.HTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	className?: string;
	message: string;
}

const Button: FC<buttonProps> = ({ variant, className, ...props }) => {
	return (
		<button className={cn(buttonVariants({ variant, className }))} {...props}>
			{props.message}
		</button>
	);
};

export { Button, buttonVariants };
