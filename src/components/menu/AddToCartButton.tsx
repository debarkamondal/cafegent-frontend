import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addToCart, removeFromCart } from "@/redux/cartSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const AddToCartButton = (props: any) => {
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();
	let addOnClick = (event: any) =>
		dispatch(addToCart({ id: props.id, name: props.name, price: props.price }));
	let removeOnClick = (event: any) =>
		dispatch(
			removeFromCart({ id: props.id, name: props.name, price: props.price })
		);

	return (
		<>
			{!cart[props.id] ? (
				<button
					className="bg-green-500 text-white p-1 m-2 w-28 rounded-lg"
					id={props.id}
					onClick={addOnClick}
				>
					Add
				</button>
			) : (
				<div className="bg-green-500 text-white flex justify-around p-1 m-2 w-28 rounded-lg">
					<button id={props.id} onClick={removeOnClick}>
						<AiOutlineMinus />
					</button>
					<span>{cart[props.id].qty}</span>
					<button id={props.id} onClick={addOnClick}>
						<AiOutlinePlus />
					</button>
				</div>
			)}
		</>
	);
};

export default AddToCartButton;
