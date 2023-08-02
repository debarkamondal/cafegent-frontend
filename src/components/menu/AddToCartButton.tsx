import React from "react";
import { buttonVariants } from "../utils/Button";

const AddToCartButton = () => {
	return (
		<>
			<div
				className={`${buttonVariants({
					variant: "default",
					size: "small",
				})} flex justify-around items-center align-middle text-xl`}
			>
				<button>-</button>
				<span className="text-sm">1</span>
				<button>+</button>
			</div>
		</>
	);
};

export default AddToCartButton;
