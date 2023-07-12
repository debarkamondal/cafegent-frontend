"use client";
import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface bannerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof bannerVariants> {
	type: string;
	message: string;
}

const bannerVariants = cva(
	"absolute top-0 text-center m-4 p-2 rounded-lg border",
	{
		variants: {
			variant: {
				error: "bg-red-300 border-red-600 text-red-900",
				notice: "bg-yellow-200 border-yellow-600 text-yellow-900",
			},
		},
	}
);

const Banner: FC<bannerProps> = ({
	variant,
	className,
	type,
	message,
	...props
}) => {
	return (
		<div className={cn(bannerVariants({ variant, className }))} {...props}>
			<span className="font-bold">{type.toUpperCase()}</span>: {message}
		</div>
	);
};

export { Banner, bannerVariants };
