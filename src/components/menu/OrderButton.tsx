import React from "react";
import { ButtonContainer } from "@/common/components/ButtonContainer";

const OrderButton = () => {
	return (
		<>
			<div className="fixed w-full bottom-0 h-16 bg-gradient-to-t backdrop-blur-[10px] mix-blend-darken from-primary-900 to-primary-100 pt-3 ">
				<ButtonContainer
					message="Place Order"
					variant={"default"}
					size={"default"}
					className="relative bottom-4"
				>
					<button>Place Order</button>
				</ButtonContainer>
			</div>
		</>
	);
};

export default OrderButton;
