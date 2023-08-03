import { Banner } from "@/common/components/Banner";
import Footer from "@/common/components/Footer";
import Greeter from "@/components/booktable/Greeter";
import LoginForm from "@/components/booktable/LoginForm";
import Providers from "@/redux/provider";
import { axiosAWS } from "@/common/utils";

const fetchTableData = async (id: string) => {
	const res = await axiosAWS.get(`table/check/${id}`);
	return res.data;
};

const page = async ({ params }: { params: { id: string } }) => {
	const id = params.id.replaceAll("%3A", ":");
	const data = await fetchTableData(params.id);
	return (
		<Providers>
			{data.status === "error" && (
				<Banner message={data.message} status={data.type} variant={"error"} />
			)}
			<Greeter name={data.shopName} />
			<LoginForm token={id} type={data.type} />
			<Footer className="fixed bottom-0" />
		</Providers>
	);
};

export default page;
