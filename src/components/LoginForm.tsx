"use client";
import { Button } from "./Button";

const LoginForm = (props: { token: string; type: string }) => {
	const bookTable = async (
		name: FormDataEntryValue,
		phone: FormDataEntryValue
	) => {
		const host = process.env.NEXT_PUBLIC_BACKEND_URL;
		const url = `${host}/table/book`;
		const data = await fetch(url, {
			method: "POST",
			credentials: "include",
			// headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				token: props.token,
				name: name,
				phoneNo: phone,
			}),
		});
		console.log(await data.json());
	};

	const handleFormData = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = Object.fromEntries(
			new FormData(event.currentTarget).entries()
		);
		const { name, phone } = formData;
		bookTable(name, phone);
	};

	return (
		<form onSubmit={handleFormData}>
			<div className="bg-primary-900 text-primary-300 m-4 p-5 flex flex-col text-center h-auto rounded-xl font-main underline underline-offset-4">
				<h1 className="text-2xl mt-6 mb-3">Table: 1</h1>
				<input
					type="text"
					name="name"
					placeholder="Name"
					className="mt-6 h-12 rounded-xl p-2 bg-primary-100 text-primary-900 placeholder-primary-900"
				/>
				<input
					type="number"
					name="phone"
					placeholder="Phone number"
					className="mt-6 mb-3 h-12 rounded-xl p-2 bg-primary-100 text-primary-900 placeholder-primary-900"
				/>
			</div>
			<Button
				variant={props.type === "error" ? "disabled" : "default"}
				message={"Book Table"}
			/>
		</form>
	);
};

export default LoginForm;
