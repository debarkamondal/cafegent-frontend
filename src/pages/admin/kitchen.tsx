import MenuItemAlt from "@/components/admin/kitchen/MenuItemAlt";
import MenuHeader from "@/components/menu/MenuHeader";
import React, { useEffect, useState } from "react";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;

interface order {
	table: number;
	sk: string;
	message: string;
	id: string;
	items: {
		[id: string]: {
			name: string;
			price: number;
			qty: number;
		};
	};
}

const Kitchen = () => {
	const [orders, setOrders] = useState([]);
	const getOrders = async () => {
		const response = await fetch(
			`${host}/admin/order/ORDER:01GXX9JHKHP5ZDW92NRRNPBHA`,
			{
				method: "GET",
			}
		);
		const data = await response.json();
		setOrders(data.Items);
	};
	useEffect(() => {
		const interval = setTimeout(() => getOrders(), 5000);
		console.log(orders);
		return () => clearTimeout(interval);
	});
	return (
		<>
			<MenuHeader />

			{orders.map((order: order) => {
				return <MenuItemAlt key={Math.random() * 10000} order={order} />;
			})}
		</>
	);
};

export default Kitchen;
