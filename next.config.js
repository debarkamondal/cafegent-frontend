/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.budgetbytes.com",
				port: "",
				pathname: "wp-content/uploads/2020/06",
			},
		],
	},
};

module.exports = nextConfig;
