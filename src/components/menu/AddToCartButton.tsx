"use client";
import React, { FC } from "react";
import { Button, buttonVariants } from "@/common/components/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, removeFromCart } from "@/redux/cartSlice";

interface addToCartButtonVariant extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	price: number;
	name: string;
}

const AddToCartButton: FC<addToCartButtonVariant> = ({
	id,
	name,
	price,
	...props
}) => {
	const dispatch = useAppDispatch();
	const item = useAppSelector((state) => state.cart[id]);
	const increaseQty = () => dispatch(addToCart({ id, name, price }));
	const decreaseQty = () => dispatch(removeFromCart({ id, name, price }));

	return (
		<>
			{item ? (
				<span
					className={buttonVariants({
						variant: "default",
						size: "small",
						className:
							"col-span-2 flex justify-around gap-2 items-center justify-self-end",
					})}
				>
					<button onClick={decreaseQty}>-</button>
					<span>{item ? item.qty : "Add"}</span>
					<button onClick={increaseQty}>+</button>
				</span>
			) : (
				<Button
					className={buttonVariants({
						variant: "default",
						size: "small",
						className:
							"col-span-2 flex justify-around gap-2 items-center justify-self-end",
					})}
					onClick={increaseQty}
				>
					Add+
				</Button>
			)}
		</>
	);
};

export default AddToCartButton;
