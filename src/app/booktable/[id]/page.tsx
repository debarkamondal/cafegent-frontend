import { Banner } from "@/components/utils/Banner";
import Footer from "@/components/utils/Footer";
import Greeter from "@/components/booktable/Greeter";
import LoginForm from "@/components/booktable/LoginForm";
import Providers from "@/redux/provider";

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
			{res.type === "error" && (
				<Banner message={res.message} type={res.type} variant={"error"} />
			)}
			<Greeter />
			<LoginForm token={id} type={res.type} />
			<Footer className="fixed bottom-0" />
		</Providers>
	);
};

export default page;
