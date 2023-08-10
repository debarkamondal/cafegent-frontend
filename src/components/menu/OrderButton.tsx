"use client";
import React, { useRef } from "react";
import { Button } from "@/common/components/Button";
import Modal from "@/common/components/Modal";
import { GrClose } from "react-icons/gr";
import MenuContainer from "./MenuContainer";

const OrderButton = () => {
	const modalRef = useRef<HTMLDialogElement>(null);
	return (
		<>
			<Modal ref={modalRef} className="text-center">
				<h1 className="text-2xl text-primary-900 font-bold">Cart</h1>
				<hr className="bg-primary-900 h-px w-2/6 mx-auto" />
				<GrClose
					className="absolute top-2 right-2"
					onClick={() => modalRef.current?.close()}
				/>
				<MenuContainer />
			</Modal>
			<div className="fixed w-full bottom-0 h-16 bg-gradient-to-t backdrop-blur-[10px] mix-blend-darken from-primary-900 to-primary-100 pt-3 ">
				<Button
					message="Place Order"
					variant={"default"}
					size={"default"}
					className="relative bottom-4"
					onClick={() => {
						modalRef.current?.showModal();
					}}
				>
					<div>Place Order</div>
				</Button>
			</div>
		</>
	);
};

export default OrderButton;
