import React, { FC } from "react";
import { Button, buttonVariants } from "@/common/components/Button";

interface addToCartButtonVariant extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	price: number;
	name: string;
}

const AddToCartButton: FC<addToCartButtonVariant> = ({ id, name, price }) => {
	return (
		// <div className="">
		<div
			className={buttonVariants({
				variant: "default",
				size: "small",
				className: "col-span-2 flex justify-around items-center",
			})}
		>
			<button>-</button>
			<span>1</span>
			<button>+</button>
		</div>
		// </div>
	);
};

export default AddToCartButton;
