"use client";
import OrderButton from "@/components/menu/OrderButton";
import ItemCard from "@/components/menu/ItemCard";
import Footer from "@/components/utils/Footer";
import React, { useEffect, useState } from "react";
import { axiosAWS } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const page = () => {
	const [menu, setMenu] = useState([]);
	const session = useAppSelector((state) => state.session);
	const fetchMenu = async () => {
		try {
			const menuData = await axiosAWS.get("/menu");
			setMenu(menuData.data);
			console.log(menu);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchMenu();
	}, []);
	return (
		<>
			<div className="bg-primary-900 text-primary-100 m-4 p-5 h-auto rounded-xl font-main drop-shadow-lg">
				<div className="flex">
					<section className="w-10/12">
						<h1 className="text-3xl my-2">
							Hi, <span className="font-bold">{session.name}</span>
						</h1>
						<span className="text-sm">Welcome to Adda-Cafe</span>
					</section>
					<section className="w-2/12 my-auto text-center ">X</section>
				</div>
				<input
					className="bg-primary-100 w-full mt-4 h-12 p-2 rounded-xl text-primary-900 placeholder-primary-900"
					placeholder="What would you like today?"
				></input>
			</div>
			<div className="filters flex gap-2 px-2 mx-5">
				<span className="w-full rounded-md h-9 p-1 border bg-primary-300 border-primary-900 text-end ">
					Veg
				</span>
				<span className="w-full rounded-md h-9 p-1 border bg-primary-300 border-primary-900 text-end ">
					Non-Veg
				</span>
				<span className="w-full rounded-md h-9 p-1 border bg-primary-300 border-primary-900 text-end ">
					Drinks
				</span>
			</div>
			{menu &&
				menu.map((element: any) => {
					return (
						<ItemCard
							key={Math.random()}
							image={element.image}
							description={element.description}
							price={element.price}
							name={element.name}
						/>
					);
				})}
			<Footer className="h-16 flex gap-1 justify-center items-center mb-4" />
			<OrderButton />
		</>
	);
};

export default page;
