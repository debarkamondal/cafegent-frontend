import React from "react";
import { Button } from "../utils/Button";

const OrderButton = () => {
	return (
		<>
			<div className="fixed w-full bottom-0 h-16 bg-gradient-to-t backdrop-blur-[10px] mix-blend-darken from-primary-900 to-primary-100 pt-3 "></div>
			<Button
				message="Place Order"
				variant={"default"}
				size={"default"}
				className="sticky bottom-4 "
			/>
		</>
	);
};

export default OrderButton;