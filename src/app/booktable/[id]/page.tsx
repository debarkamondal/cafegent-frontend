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

const page = ({ params }: { params: { id: string } }) => {
	const host = process.env.NEXT_PUBLIC_BACKEND_URL;
	params.id = params.id.replaceAll("%3A", ":");
	let res;

	(async function tableStatus() {
		const url = `${host}/table/check/${params.id}`;
		const data = await fetch(url, { method: "GET" });
		res = data.json();
	})();
	return (
		<Providers>
			<Suspense fallback={<p>Loading...</p>}>
				{res.message && <ErrorBanner message={res.message} type={res.type} />}
				<Greeter />
				<LoginForm />
				<Footer />
			</Suspense>
		</Providers>
	);
};

export default page;
