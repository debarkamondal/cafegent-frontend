// import MenuItem from "@/components/MenuItem";
import MenuItemAlt from "@/components/menu/MenuItemAlt";
import React, { useState } from "react";
import CartChekoutButton from "@/components/cart/CartChekoutButton";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Modal from "@/components/modal/Modal";
import MenuHeader from "@/components/menu/MenuHeader";
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

const Menu = (props: props) => {
	const cart = useSelector((state: RootState) => state.cart);
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<MenuHeader />
			<div className="m-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 h-full">
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
			{/* Showing Checkout Button only when cart it not empty */}
			{Object.keys(cart).length && (
				<CartChekoutButton setShowModal={setShowModal} />
			)}
			<Modal showModal={showModal} setShowModal={setShowModal} />
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

export default Menu;
