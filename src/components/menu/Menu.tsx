"use client";

import { axiosAWS } from "@/lib/utils";
import { setError } from "@/redux/errorSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Menu: FC = () => {
	const [menu, setMenu] = useState<Array<Object>>();
	const session = useAppSelector((state) => state.session);
	const router = useRouter();
	const dispatch = useAppDispatch();
	const fetchMenu = async () => {
		try {
			const menuData = await axiosAWS.get("/menu");
			setMenu(menuData.data);
		} catch (error: any | AxiosError) {
			const data = error.response.data;
			switch (data.message) {
				case "Unauthorized":
					dispatch(setError(data));
					break;
			}
		}
	};
	useEffect(() => {
		fetchMenu();
	}, []);
	return (
		<>
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
		</>
	);
};

export default Menu;
