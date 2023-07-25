import { cookies } from "next/headers";
import React from "react";

const page = () => {
	const cookie = cookies();
	const all = cookie.getAll();
	console.log(all);
	return <div>page</div>;
};

export default page;
