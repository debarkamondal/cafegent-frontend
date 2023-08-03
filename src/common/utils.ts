import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import axios from "axios";

// Merges the classes passed together.
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

// Creates an axios instance and defines default config
export const axiosAWS = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});
