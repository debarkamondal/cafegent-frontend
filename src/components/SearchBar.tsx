import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
	return (
		<div className="w-full h-9 px-1 bg-white rounded-full flex justify-center items-center">
			<input
				type="text"
				className="text-black w-11/12 p-3 h-full rounded-full"
				placeholder="Search today's menu"
				// value={"hello"}
			/>
			<AiOutlineSearch className="bg-green-500 h-7 w-9 rounded-full" />
		</div>
	);
};

export default SearchBar;
