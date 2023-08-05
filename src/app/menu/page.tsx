import Filters from "@/components/menu/Filters";
import MenuContainer from "@/components/menu/MenuContainer";
import OrderButton from "@/components/menu/OrderButton";
import TopCard from "@/components/menu/TopCard";
import Footer from "@/common/components/Footer";
import React from "react";

const page = () => {
	return (
		<>
			<TopCard />
			<Filters />
			<MenuContainer />
			<Footer className="h-16 flex gap-1 justify-center items-center mb-4" />
			<OrderButton />
		</>
	);
};

export default page;
