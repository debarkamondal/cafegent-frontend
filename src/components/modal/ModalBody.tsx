import React, { useState } from "react";
import GridData from "./GridData";
import styles from "./Modal.module.css";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;

const ModalBody = (props: any) => {
	const cart = useSelector((state: RootState) => state.cart);
	const [cartMessage, setCartMessage] = useState("");
	const cartItems = Object.keys(cart);
	let amount = 0;
	let loading = false;

	const submitOrder = async () => {
		try {
			props.setLoading(true);
			const response = await fetch(`${host}/order`, {
				method: "POST",
				headers: {},
				body: JSON.stringify({ items: { ...cart }, message: cartMessage }),
			});

			let data = await response.json();
			props.setLoading(false);
			data.$metadata.httpStatusCode === 200
				? props.setShowModal(false)
				: "Error Occured";
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="modalBody flex flex-col">
				<h2 className="primary-accent font-semibold m-2">Cart Items</h2>

				{/* Since borders were overlapping used background color appearing through gaps as border */}
				<div
					className={`${styles.modalGrid} grid grid-cols-9 gap-px content-center`}
				>
					<div className="col-span-4">Item</div>
					<div className="col-span-1">Qty</div>
					<div className="col-span-2">Price</div>
					<div className="col-span-2">Amount</div>

					{/* Rendering table with order details */}
					{cartItems.map((item) => {
						amount += cart[item].qty * cart[item].price;
						return (
							<GridData
								key={item}
								name={cart[item].name}
								qty={cart[item].qty}
								price={cart[item].price}
							/>
						);
					})}
					<div className="col-span-7">Total: </div>
					<div className="col-span-2">{amount}</div>
				</div>
				<h2 className="primary-accent m-3">Add a Note</h2>
				<textarea
					onChange={(e) => setCartMessage(e.target.value)}
					name="note"
					cols={50}
					rows={5}
					placeholder="Mention allergies, customization or requests. (Optional)"
					className="border secondary-accent place-items-end"
				></textarea>
			</div>
			<div className="modalFooter absolute bottom-0 left-0 w-full  ">
				<button
					onClick={submitOrder}
					className="bg-green-400 rounded-full w-11/12 m-4 h-14"
				>
					Place Order
				</button>
			</div>
		</>
	);
};

export default ModalBody;
