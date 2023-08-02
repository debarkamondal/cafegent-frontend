import React, { FC } from "react";
import { Button } from "../utils/Button";
import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";
import AddToCartButton from "./AddToCartButton";

interface itemProps {
	image: string;
	sk?: string;
	tag?: string;
	id?: string;
	price: number;
	description: string;
	name: string;
}

const ItemCard: FC<itemProps> = ({
	image,
	price,
	description,
	name,
	...props
}) => {
	return (
		<div className="bg-primary-300 text-primary-900 m-2 p-3 text-center rounded-xl font-main drop-shadow-md grid gap-1 grid-cols-9 grid-rows-3">
			<Image
				alt={name}
				src={image}
				width={300}
				height={300}
				className="row-span-3 col-span-3 rounded-xl object-cover h-full w-full"
			/>
			<span className="col-span-4 font-semibold">
				{<BiPlayCircle />}
				{name}
			</span>
			<span className="self-end text-center row-span-2 col-span-2 font-semibold">
				&#8377; {price}
			</span>
			<p className="mx-2 row-span-2 col-span-4 text-[0.75rem] font-normal text-left leading-3">
				{description}
			</p>
			{/* <Button
				message="Add +"
				className="col-span-2"
				variant={"default"}
				size={"small"}
			/> */}
			<AddToCartButton />
		</div>
	);
};

export default ItemCard;
