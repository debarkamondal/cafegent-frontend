import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import axios from "axios";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const axiosAWS = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});
