import React, { FC, forwardRef } from "react";

const Modal = forwardRef<HTMLDialogElement, { children?: React.ReactNode }>(
	(props, ref) => {
		return <dialog ref={ref}>{props.children}</dialog>;
	}
);

export default Modal;
