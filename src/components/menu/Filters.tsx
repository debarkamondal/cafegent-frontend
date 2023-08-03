import React from "react";

const Filters = () => {
	return (
		<div className="filters flex gap-2 px-2 mx-2 text-sm text-center text-primary-900 font-semibold">
			<span className="w-full rounded-md h-8 p-1 border bg-primary-300 border-primary-900">
				Veg
			</span>
			<span className="w-full rounded-md h-8 p-1 border bg-primary-300 border-primary-900">
				Non-Veg
			</span>
			<span className="w-full rounded-md h-8 p-1 border bg-primary-300 border-primary-900">
				Drinks
			</span>
		</div>
	);
};

export default Filters;
