"use client";
import React, { FC } from "react";

interface errorBannerProps extends React.HTMLAttributes<HTMLDivElement> {
	message: string;
	type: string;
}

const ErrorBanner: FC<errorBannerProps> = ({ message, type, ...props }) => {
	return (
		<div {...props}>
			<span className="font-bold">{type.toUpperCase()}</span>: {message}
		</div>
	);
};

export default ErrorBanner;
