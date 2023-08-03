import React, { FC } from "react";
import { buttonVariants } from "@/common/components/Button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/common/utils";

interface addToCartButtonVariant
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof buttonVariants> {
	id: string;
	price: number;
	name: string;
}

const AddToCartButton: FC<addToCartButtonVariant> = ({
	variant,
	size,
	className,
	...props
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
