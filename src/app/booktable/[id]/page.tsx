import { Banner } from "@/components/Banner";
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
	const id = params.id.replaceAll("%3A", ":");
	const res = await fetchTableData(params.id);
	return (
		<Providers>
			<Suspense fallback={<p>Loading...</p>}>
				{res.type === "error" && (
					<Banner message={res.message} type={res.type} variant={"error"} />
				)}
				<Greeter />
				<LoginForm token={id} type={res.type} />
				<Footer />
			</Suspense>
		</Providers>
	);
};

export default page;
