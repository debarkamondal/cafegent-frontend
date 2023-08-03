import React, { FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/common/utils";
import { store } from "@/redux/store";

const bannerVariants = cva(
	"absolute w-11/12 top-0 text-center m-4 p-2 rounded-lg border",
	{
		variants: {
			variant: {
				error: "bg-red-300 border-red-600 text-red-900",
				notice: "bg-yellow-200 border-yellow-600 text-yellow-900",
			},
		},
	}
);

interface bannerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof bannerVariants> {
	status?: string;
	message?: string;
}

const { error } = store.getState();

const Banner: FC<bannerProps> = ({
	variant,
	className,
	// status,
	// message,
	...props
}) => {
	return (
		<div className={cn(bannerVariants({ variant, className }))} {...props}>
			{/* {error && <span className="font-bold">{error.status.toUpperCase()}</span>}
			: {error.message} */}
		</div>
	);
};

export { Banner, bannerVariants };
