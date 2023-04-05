// import MenuItem from "@/components/MenuItem";
import MenuItemAlt from "@/components/menuItem/MenuItemAlt";
import { useEffect } from "react";
import React from "react";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

interface props {
	data: Array<object>;
}

const menu = (props: props) => {
	return (
		<div className="m-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 h-full ">
			{props.data.map((element: any) => {
				return (
					<MenuItemAlt
						key={element._id}
						_id={element._id}
						name={element.name}
						// pieces="2"
						price={element.price}
						tag={element.tag}
						description={element.description}
						image={element.image}
					/>
				);
			})}
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
