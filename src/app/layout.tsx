import "@/app/global.css";
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
	return (
		<html lang="en" className={`${fontMain.variable} bg-primary-100`}>
			<body>{children}</body>
		</html>
	);
}
