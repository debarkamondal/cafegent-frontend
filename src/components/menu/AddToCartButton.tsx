import React, { FC } from "react";
import { buttonVariants } from "../utils/Button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface addToCartButtonVariant
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof buttonVariants> {}

const AddToCartButton: FC<addToCartButtonVariant> = ({
	variant,
	size,
	className,
}) => {
	return (
		<>
			<div className={cn(buttonVariants({ variant, size, className }))}>
				<button>-</button>
				<span>1</span>
				<button>+</button>
			</div>
		</>
	);
};

export default AddToCartButton;
