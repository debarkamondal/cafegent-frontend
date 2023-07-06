import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Greeter from "@/components/Greeter";
import LoginForm from "@/components/LoginForm";
import Providers from "@/redux/provider";
import React from "react";

type Props = {};

const page = (props: Props) => {
	return (
		<Providers>
			<div className="h-screen">
				<Greeter />
				<LoginForm />
				<Button />
				<Footer />
			</div>
		</Providers>
	);
};

export default page;
