import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import ModalBody from "./ModalBody";
import Image from "next/image";

const Modal = (props: any) => {
	const [loading, setLoading] = useState(false);

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
			{/* Stop event propagation so that on clicking inside the modal body doesn't close the modal */}
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
				{loading ? (
					<Image
						alt="spinner"
						src="/assets/spinner.gif"
						width={250}
						height={250}
					/>
				) : (
					<ModalBody
						setShowModal={props.setShowModal}
						lodaing={loading}
						setLoading={setLoading}
					/>
				)}
			</div>
		</div>
	);
};

export default Modal;
