import Button from "@/components/Button";
import ErrorBanner from "@/components/ErrorBanner";
import Footer from "@/components/Footer";
import Greeter from "@/components/Greeter";
import LoginForm from "@/components/LoginForm";
import Providers from "@/redux/provider";
import React, { Suspense } from "react";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const fetchTableData = async (id: string) => {
	const url = `${host}/table/check/${id}`;
	const data = await fetch(url, { method: "GET", next: { revalidate: 2 } });
	return await data.json();
};

const page = async ({ params }: { params: { id: string } }) => {
	params.id = params.id.replaceAll("%3A", ":"); // Next js converts ":" to "%3A", this replacement fixes it.
	const res = await fetchTableData(params.id);

	return (
		<Providers>
			<Suspense fallback={<p>Loading...</p>}>
				<div className="h-screen flex flex-col justify-center">
					<Greeter />
					{res.message && <ErrorBanner message={res.message} />}
					<LoginForm />
					<Button className="w-5/6 mx-auto mt-6" />
				</div>
				<Footer />
			</Suspense>
		</Providers>
	);
};

export default page;
