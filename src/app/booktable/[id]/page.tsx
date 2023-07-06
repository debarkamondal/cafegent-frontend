import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Greeter from "@/components/Greeter";
import LoginForm from "@/components/LoginForm";
import Providers from "@/redux/provider";
import React from "react";

type Props = {};

const page = ({ params }: { params: { id: string } }) => {
	const host = process.env.NEXT_PUBLIC_BACKEND_URL;
	return (
		<Providers>
			<div className="h-screen flex flex-col justify-center">
				<Greeter />
				<LoginForm />
				<Button className="w-5/6 mx-auto mt-6" />
			</div>
			<Footer />
		</Providers>
	);
};

export default page;
