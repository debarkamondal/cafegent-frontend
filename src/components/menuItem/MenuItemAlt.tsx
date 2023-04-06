import Image from "next/image";
import React from "react";
import { BiCaretUpSquare } from "react-icons/bi";
import AddToCartButton from "./CartCheckoutButton";

const MenuItemAlt = (props: any) => {
	const loader = () => {
		return props.image;
	};
	return (
		<div className="flex justify-between align-middle my-3 p-4 h-52 drop-shadow-xl bg-white w-full rounded-xl">
			<div className="flex flex-col justify-between text-xs">
				<span className="veg-nonveg-icon text-lg text-red-600">
					<BiCaretUpSquare />
				</span>
				<h1 className="text-xl mt-1">{props.name}</h1>
				<span className="text-sm font-semibold my-2">
					&#8377; {props.price}
				</span>
				{/*adding rupee symbol*/}
				<p className="h-20 overflow-ellipsis">{props.description}</p>
			</div>
			<div className="flex flex-col items-center">
				<Image
					className="rounded-xl h-36 w-36 object-cover"
					loader={loader}
					src="BBQ-Chicken-Pizza-V2.jpg"
					alt="tandoori-chicken"
					width={500}
					height={200}
				/>
				<AddToCartButton id={props._id} />
			</div>
		</div>
	);
};

export default MenuItemAlt;
