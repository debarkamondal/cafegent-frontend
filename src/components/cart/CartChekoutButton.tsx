import { RootState } from "@/store";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartChekoutButton = (props: any) => {
	const cart = useSelector((state: RootState) => state.cart);
	let qty = 0,
		amount = 0;
	let items = Object.keys(cart);

	//Calculating total quantity and amount in the cart to show on the checkout button
	items.forEach((item) => {
		qty += cart[item].qty;
		amount += cart[item].price * cart[item].qty;
	});
	return (
		<div
			onClick={() => props.setShowModal(true)}
			className="w-full m-auto flex justify-center bottom-0 fixed"
		>
			<button className="text-white font-semibold flex justify-between items-center bg-green-400 rounded-full w-11/12 m-4 p-6 h-14">
				<span className="inline relative">
					<BsCart3 className="text-lg" />
					<span className="bg-white text-xs h-4 w-4 text-green-500 absolute -top-2 -right-2 rounded-full">{`${qty}`}</span>
				</span>
				<span>Place Order</span>
				<span>&#8377;{`${amount}`}</span>
			</button>
		</div>
	);
};

export default CartChekoutButton;
