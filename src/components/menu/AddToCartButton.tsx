import React, { FC } from "react";
import { ButtonContainer } from "@/common/components/ButtonContainer";

interface addToCartButtonVariant extends React.HTMLAttributes<HTMLDivElement> {
	id: string;
	price: number;
	name: string;
}

const AddToCartButton: FC<addToCartButtonVariant> = ({ id, name, price }) => {
	return (
		<div className="col-span-2 justify-self-center">
			<ButtonContainer variant={"default"} size={"small"} className="gap-3">
				<button>-</button>
				<span>1</span>
				<button>+</button>
			</ButtonContainer>
		</div>
	);
};

export default AddToCartButton;
