import React from "react";

const CartChekoutButton = () => {
	return (
		<div className="w-full m-auto flex justify-center absolute bottom-0">
			<button className="flex justify-between items-center bg-green-400 rounded-full w-11/12 m-4 p-6 h-14">
				<span>Itm: 1</span>
				<span>Place Order</span>
				<span>Price : 300</span>
			</button>
		</div>
	);
};

export default CartChekoutButton;
