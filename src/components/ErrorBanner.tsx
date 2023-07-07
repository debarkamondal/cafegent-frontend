import React from "react";

const ErrorBanner = (props: { message?: string | undefined }) => {
	console.log(props.message);
	return <div>{props.message}</div>;
};

export default ErrorBanner;
