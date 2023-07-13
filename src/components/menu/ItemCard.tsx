import React from "react";
import { Button } from "../utils/Button";

const ItemCard = () => {
	return (
		<div className="bg-primary-300 text-primary-900 m-4 p-3 text-center rounded-xl font-main drop-shadow-md grid gap-1 grid-cols-9 grid-rows-3">
			<span className="h-24 border row-span-3 col-span-3"></span>
			<span className="col-span-4">Chicken Biriyani</span>
			<span className="self-end text-center row-span-2 col-span-2 font-semibold">
				Rs:300
			</span>
			<p className="mx-2 row-span-2 col-span-4 text-[0.63rem] font-extralight text-left leading-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ab debitis
			</p>
			<Button
				message="Add +"
				className="col-span-2"
				variant={"default"}
				size={"small"}
			/>
		</div>
	);
};

export default ItemCard;
