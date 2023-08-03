import React from "react";
import { Button } from "@/common/components/Button";

const OrderButton = () => {
	return (
		<>
			<div className="fixed w-full bottom-0 h-16 bg-gradient-to-t backdrop-blur-[10px] mix-blend-darken from-primary-900 to-primary-100 pt-3 ">
				<Button
					message="Place Order"
					variant={"default"}
					size={"default"}
					className="relative bottom-4"
				/>
			</div>
		</>
	);
};

export default OrderButton;
