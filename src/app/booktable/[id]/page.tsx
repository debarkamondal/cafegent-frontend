import { Banner } from "@/components/utils/Banner";
import Footer from "@/components/utils/Footer";
import Greeter from "@/components/booktable/Greeter";
import LoginForm from "@/components/booktable/LoginForm";
import Providers from "@/redux/provider";
import axios from "axios";

const host = process.env.NEXT_PUBLIC_BACKEND_URL;
const fetchTableData = async (id: string) => {
	const url = `${host}/table/check/${id}`;
	const res = await axios.get(url);
	return res.data;
};

const page = async ({ params }: { params: { id: string } }) => {
	const id = params.id.replaceAll("%3A", ":");
	const data = await fetchTableData(params.id);
	return (
		<Providers>
			{data.type === "error" && (
				<Banner message={data.message} type={data.type} variant={"error"} />
			)}
			<Greeter />
			<LoginForm token={id} type={data.type} />
			<Footer className="fixed bottom-0" />
		</Providers>
	);
};

export default page;
