// import MenuItem from "@/components/MenuItem";
import MenuItemAlt from "@/components/MenuItemAlt";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

const menu = (props: object) => {
	"data" in props ? console.log("hey") : null;
	return (
		<div className="m-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 h-full ">
			<MenuItemAlt
				key={12345678}
				name="Tandoori Chicken"
				pieces="2"
				price="300"
			/>
			<MenuItemAlt
				key={123456789}
				name="Tandoori Chicken"
				pieces="2"
				price="300"
			/>
		</div>
	);
};

export const getServerSideProps = async () => {
	const url: string = `${host}:${port}/api/menu/getitems`;
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	return {
		props: { data },
	};
};

export default menu;
