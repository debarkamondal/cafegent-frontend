import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const CartChekoutButton = () => {
	const cart = useSelector((state: RootState) => state.cart);
	let qty = 0,
		amount = 0;
	let items = Object.keys(cart);
	items.forEach((item) => {
		qty += cart[item].qty;
		amount += cart[item].price * cart[item].qty;
	});
	console.log(qty, amount);
	// console.log(items);
	return (
		<div className="w-full m-auto flex justify-center absolute bottom-0">
			<button className="flex justify-between items-center bg-green-400 rounded-full w-11/12 m-4 p-6 h-14">
				<span>Itm: {`${qty}`}</span>
				<span>Place Order</span>
				<span>Amount : {`${amount}`}</span>
			</button>
		</div>
	);
};

export default CartChekoutButton;
