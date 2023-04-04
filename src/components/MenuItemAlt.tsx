import Image from "next/image";
import React from "react";
import { BiCaretUpSquare } from "react-icons/bi";

const MenuItemAlt = (props: any) => {
	let name = props.name;
	let handleClick = (event) => {
		console.log(props.key);
	};

	return (
		<div className="flex align-middle menuitem my-3 p-4 h-52 drop-shadow-xl bg-white w-full rounded-xl">
			<div className="w-4/6 flex flex-col justify-around text-xs">
				<span className="veg-nonveg-icon text-xl text-red-600">
					<BiCaretUpSquare />
				</span>
				<h1 className="text-xl">Barbecue Chicken Pizza</h1>
				<span className="text-lg font-medium">&#8377; {props.price}</span>{" "}
				{/*adding rupee symbol*/}
				<p className="h-20 pr-8">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
					reprehenderit delectus, reiciendis dolor unde rem deserunt sint
					aliquam doloribus ducimus minima voluptatum laudantium vel quod velit?
				</p>
			</div>
			<div className="flex flex-col items-center w-2/6">
				<Image
					className="rounded-xl h-36 w-36 object-cover"
					src="/assets/tandoori-chicken.jpg"
					alt="tandoori-chicken"
					width={500}
					height={200}
				/>
				<button
					className="bg-green-500 text-white p-1 m-2 w-28 rounded-lg"
					onClick={handleClick}
				>
					Add
				</button>
			</div>
		</div>
	);
};

export default MenuItemAlt;
