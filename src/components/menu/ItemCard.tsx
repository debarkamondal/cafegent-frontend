import React, { FC } from "react";
import Image from "next/image";
import { BiPlayCircle } from "react-icons/bi";
import AddToCartButton from "./AddToCartButton";

interface itemProps {
	image: string;
	sk?: string;
	tag?: string;
	id: string;
	price: number;
	description: string;
	name: string;
}

const ItemCard: FC<itemProps> = ({
	image,
	id,
	price,
	description,
	name,
	...props
}) => {
	return (
		<div className="bg-primary-100 text-primary-900 h-28 m-2 p-3 text-center text-sm rounded-xl font-main drop-shadow-md grid gap-1 grid-cols-9 grid-rows-3 items-center">
			<Image
				alt={name}
				src={image}
				width={300}
				height={300}
				className="row-span-3 col-span-3 rounded-xl object-cover w-full h-full"
			/>
			<div className="col-span-6 font-semibold gap-1 flex items-center">
				<BiPlayCircle />
				{name}
			</div>
			<p className="mx-2 row-span-2 col-span-4 text-[0.75rem] font-normal text-left leading-3">
				{description}
			</p>
			<span className="self-end text-center col-span-2 font-semibold">
				&#8377; {price}
			</span>
			<AddToCartButton
				variant={"default"}
				size={"small"}
				className="flex justify-around items-center align-middle text-sm w-10/12 font-semibold col-span-2"
				id={id}
				price={price}
				name={name}
			/>
		</div>
	);
};

export default ItemCard;
