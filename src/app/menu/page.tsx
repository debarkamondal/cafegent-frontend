import Filters from "@/components/menu/Filters";
import Menu from "@/components/menu/Menu";
import OrderButton from "@/components/menu/OrderButton";
import TopCard from "@/components/menu/TopCard";
import Footer from "@/common/components/Footer";
import React from "react";

const page = () => {
	return (
		<>
			<TopCard />
			<Filters />
			<Menu />
			<Footer className="h-16 flex gap-1 justify-center items-center mb-4" />
			<OrderButton />
		</>
	);
};

export default page;
