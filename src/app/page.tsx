import Greeter from "@/components/Greeter";
import LoginForm from "@/components/booktable/LoginForm";
import Providers from "@/redux/provider";
import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<Providers>
			<Greeter />
			{/* <LoginForm /> */}
		</Providers>
	);
};

export default page;
