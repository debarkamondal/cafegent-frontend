import "@/app/global.css";
import { Banner } from "@/components/utils/Banner";
import Providers from "@/redux/provider";
import { store } from "@/redux/store";
import { Montserrat } from "next/font/google";

const fontMain = Montserrat({
	subsets: ["latin"],
	weight: "variable",
	variable: "--font-main",
});

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	console.log(error);
	return (
		<html lang="en" className={`${fontMain.variable} bg-primary-100`}>
			<Banner />
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
