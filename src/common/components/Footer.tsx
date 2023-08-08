import { cn } from "@/common/functions/utils";
import React, { FC } from "react";

interface footerProps extends React.HTMLAttributes<HTMLDivElement> {}
const Footer: FC<footerProps> = ({ className }, ...props) => {
	return (
		<div
			className={cn(
				"absolute w-full text-center font-main p-2 my-2 text-primary-900",
				className
			)}
		>
			<div className="text-sm">Powered by </div>
			<div className="text-lg font-semibold">ApnaCashier</div>
		</div>
	);
};

export default Footer;
