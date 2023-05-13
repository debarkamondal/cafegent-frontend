// import MenuItem from "@/components/MenuItem";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MenuItemAlt from "@/components/menu/MenuItemAlt";
import CartChekoutButton from "@/components/cart/CartChekoutButton";
import { RootState } from "@/store";
import Modal from "@/components/modal/Modal";
import MenuHeader from "@/components/menu/MenuHeader";
import { type } from "os";
import { isNullishCoalesce } from "typescript";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;
//defining proptypes for menuItem

interface props {
	data: [
		{
			id: string;
			sk: string;
			name: string;
			price: string;
			tag: string;
			description: string;
			image: string;
		}
	];
}

const Menu = () => {
	// authToken = localStorage.getItem("authToken");
	const cart = useSelector((state: RootState) => state.cart);
	const session = useSelector((state: RootState) => state.session);
	const [menu, setMenu] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const getMenu = async (authToken: string | null) => {
		const url: string = `${host}/menu/${authToken}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		setMenu(data);
	};

	useEffect(() => {
		let authToken: string | null =
			session.authToken || localStorage.getItem("authToken");
		getMenu(authToken);
	}, [menu]);

	return (
		<>
			<MenuHeader />
			<div className="m-4 gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 h-full">
				{menu &&
					menu.map((element: any) => {
						return (
							<>
								<MenuItemAlt
									key={`${element.id}:${element.sk}`}
									id={`${element.id}:${element.sk}`}
									pk={element.id}
									sk={element.sk}
									name={element.name}
									price={element.price}
									tag={element.tag}
									description={element.description}
									image={element.image}
								/>
							</>
						);
					})}
			</div>
			{/* Showing Checkout Button only when cart it not empty */}
			{Object.keys(cart).length ? (
				<CartChekoutButton setShowModal={setShowModal} />
			) : null}
			<Modal
				// id={props.data[0].id}
				showModal={showModal}
				setShowModal={setShowModal}
			/>
		</>
	);
};

// Using SSR for generating props

// export const getServerSideProps = async () => {
// 	const url: string = `${host}/menu/${authToken}`;
// 	const response = await fetch(url, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 	});
// 	const data = await response.json();
// 	return {
// 		props: { data },
// 	};
// };

export default Menu;
