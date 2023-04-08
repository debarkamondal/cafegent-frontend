import React from "react";
import SearchBar from "../SearchBar";

const MenuHeader = () => {
	return (
		<div className="bg-green-500 h-content p-4 text-white flex flex-col justify-center gap-2">
			<h1 className="font-bold text-4xl">Hi,</h1>
			<h2 className="text-3xl">Debarka</h2>
			<p className="mb-1">Welcome, to Adda-Cafe</p>
			<SearchBar />
		</div>
	);
};

export default MenuHeader;
