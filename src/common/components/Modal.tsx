import React, { FC, forwardRef } from "react";

const Modal = forwardRef<
	HTMLDialogElement,
	{ children?: React.ReactNode; className?: string }
>((props, ref) => {
	return (
		<dialog ref={ref} className={props.className}>
			{props.children}
		</dialog>
	);
});

export default Modal;
