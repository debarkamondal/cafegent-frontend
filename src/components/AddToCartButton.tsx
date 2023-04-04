import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addToCart } from "@/redux/cartSlice";

const AddToCartButton = (props: any) => {
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	let addOnClick = (event: any) => {
		dispatch(addToCart(event.target.id));
		console.log(cart);
	};

	return (
		<div>
			<button
				className="bg-green-500 text-white p-1 m-2 w-28 rounded-lg"
				id={props.id}
				onClick={addOnClick}
			>
				Add
			</button>
		</div>
	);
};

export default AddToCartButton;
