import React from "react";

const CartItems = (props: any) => {
	// let cartItem = cart[item];
	return (
		<>
			<div className="col-span-4">{props.name}</div>
			<div className="col-span-1">{props.qty}</div>
			<div className="col-span-2">{props.price}</div>
			<div className="col-span-2">{props.price * props.qty}</div>
		</>
	);
};

export default CartItems;
