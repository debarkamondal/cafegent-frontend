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
	const id = params.id.replaceAll("%3A", ":");
	const res = await fetchTableData(params.id);
	const color = res.type === "error" ? "blue" : "green";
	return (
		<Providers>
			<Suspense fallback={<p>Loading...</p>}>
				{res.message && (
					<ErrorBanner
						message={res.message}
						type={res.type}
						className={`absolute top-0 text-center m-4 p-2 bg-${color}-300 border border-${color}-600 text-${color}-900`}
					/>
				)}
				<Greeter />
				<LoginForm token={id} />
				<Footer />
			</Suspense>
		</Providers>
	);
};

export default page;
