import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import ModalCartGrid from "./ModalCartGrid";
import styles from "./Modal.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const Modal = (props: any) => {
	const cart = useSelector((state: RootState) => state.cart);
	const cartItems = Object.keys(cart);
	let amount = 0;
	const handleKeyDown = (e: any) => {
		if (e.key === "Escape") props.setShowModal(false);
	};
	useEffect(() => {
		document.body.addEventListener("keydown", handleKeyDown);
		return function cleanup() {
			document.body.removeEventListener("keydown", handleKeyDown);
		};
	});

	return (
		<div
			className={`modalBackground ${
				props.showModal ? "block" : "hidden"
			} h-screen w-screen bg-black/70 absolute top-0 flex justify-center items-center`}
			onClick={() => props.setShowModal(false)}
			onKeyDown={handleKeyDown}
		>
			{/* Stop event propagation so that on clicking outside the modal body closes the modal */}
			<div
				className="modalContainer relative bg-white p-3 text-center h-5/6 w-10/12"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="modalHead relative mb-3 font-bold">
					<h1 className="primary-accent">Confirm Order</h1>
					<MdClose
						onClick={() => props.setShowModal(false)}
						className="mt-1.5 primary-accent text-2xl absolute right-0 top-0 cursor-pointer"
					/>
				</div>
				<hr className="border-px primary-accent mt-2" />
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
								<ModalCartGrid
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
						name="note"
						cols={50}
						rows={5}
						placeholder="Mention allergies, customization or requests. (Optional)"
						className="border secondary-accent place-items-end"
					></textarea>
				</div>
				<div className="modalFooter absolute bottom-0 left-0 w-full  ">
					<button className="bg-green-400 rounded-full w-11/12 m-4 h-14">
						Place Order
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
