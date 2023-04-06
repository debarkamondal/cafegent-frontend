// import MenuItem from "@/components/MenuItem";
import MenuItemAlt from "@/components/menuItem/MenuItemAlt";
import React from "react";
import CartChekoutButton from "@/components/CartChekoutButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

//defining proptypes for menuItem

interface props {
	data: [
		{
			_id: string;
			name: string;
			price: string;
			tag: string;
			description: string;
			image: string;
		}
	];
}

const menu = (props: props) => {
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<>
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
			{Object.keys(cart).length && <CartChekoutButton />}
		</>
	);
};

// Using SSR for generating props
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
