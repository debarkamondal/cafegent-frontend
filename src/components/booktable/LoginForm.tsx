"use client";
import { Button } from "@/components/utils/Button";
import { useAppDispatch } from "@/redux/hooks";
import { setName, setPhone } from "@/redux/sessionSlice";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginForm = (props: { token: string; type: string }) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const bookTable = async (
		name: FormDataEntryValue,
		phone: FormDataEntryValue
	) => {
		const host = process.env.NEXT_PUBLIC_BACKEND_DOMAIN;
		const url = `${host}/table/book`;
		const res = await axios.post(
			url,
			{
				token: props.token,
				name: name,
				phoneNo: phone,
			},
			{
				withCredentials: true,
			}
		);
		return res.data;
	};
	const handleFormData = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = Object.fromEntries(
			new FormData(event.currentTarget).entries()
		);
		const { name, phone } = formData;
		const data = await bookTable(name, phone);
		if (data) {
			dispatch(setName(name as string));
			dispatch(setPhone(parseInt(phone as string)));
			router.push("/menu");
		}
		// if (data.type && data.type === "success") router.push("/menu");
	};

	return (
		<form onSubmit={handleFormData} className="max-w-xl mx-auto h-3/5">
			<div className="bg-primary-900 text-primary-300 m-4 p-5 h-3/6 flex flex-col justify-around text-center rounded-xl font-main">
				<h1 className="text-2xl underline underline-offset-4">Table: 1</h1>
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="h-12 rounded-xl p-2 bg-primary-100 text-primary-900 placeholder-primary-900"
				/>
				<input
					type="number"
					name="phone"
					placeholder="Phone number"
					className="h-12 rounded-xl p-2 bg-primary-100 text-primary-900 placeholder-primary-900"
				/>
			</div>
			<Button
				variant={props.type === "error" ? "disabled" : "default"}
				message={"Book Table"}
				className="mt-6"
				size={"default"}
			/>
		</form>
	);
};

export default LoginForm;
