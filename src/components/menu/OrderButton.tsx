"use client";
import React, { useRef } from "react";
import { Button } from "@/common/components/Button";
import Modal from "@/common/components/Modal";

const OrderButton = () => {
	const modalRef = useRef<HTMLDialogElement>(null);
	return (
		<>
			<Modal ref={modalRef}>{"Hey"}</Modal>
			<div className="fixed w-full bottom-0 h-16 bg-gradient-to-t backdrop-blur-[10px] mix-blend-darken from-primary-900 to-primary-100 pt-3 ">
				<Button
					message="Place Order"
					variant={"default"}
					size={"default"}
					className="relative bottom-4"
					onClick={() => {
						modalRef.current?.showModal();
						console.log(modalRef);
					}}
				>
					<div>Place Order</div>
				</Button>
			</div>
		</>
	);
};

export default OrderButton;
