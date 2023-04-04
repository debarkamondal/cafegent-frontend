import React from "react";
import Image from "next/image";

const MenuItem = (props: any) => {
	return (
		<div className="menuitem my-4 drop-shadow-lg bg-white w-full rounded-xl overflow-hidden">
			<Image
				className="rounded-xl h-72 md:h-44 justify-start m-auto object-cover"
				src="/assets/tandoori-chicken.jpg"
				alt="tandoori-chicken"
				width={500}
				height={200}
			/>
			<div>
				<div className="itemName w-11/12 mt-2 rounded-xl underline text-center text-xl font-semibold">
					{props.name}
				</div>
				<p className="p-2 text-justify">
					Tender Chicken marinated wtih special sauce and then roasted on
					traditional tandoor. Enjoy the smoky, spicy and juicy chicken
					tandoori.
				</p>
				<span className="pl-2 font-medium">Pieces :</span>
				<span> {props.pieces} | </span>
				<span className="font-medium">Non-Veg</span>
				<hr className="invisible" />
				<div className="flex mt-4 items-center float-left">
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							width="30px"
							height="30px"
							viewBox="0 -0.5 21 21"
							version="1.1"
						>
							<title>minus_circle [#1426]</title>
							<desc>Created with Sketch.</desc>
							<defs></defs>
							<g
								id="Page-1"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="Dribbble-Light-Preview"
									transform="translate(-219.000000, -600.000000)"
									fill="#000000"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path
											d="M177.7,450 C177.7,450.552 177.2296,451 176.65,451 L170.35,451 C169.7704,451 169.3,450.552 169.3,450 C169.3,449.448 169.7704,449 170.35,449 L176.65,449 C177.2296,449 177.7,449.448 177.7,450 M173.5,458 C168.86845,458 165.1,454.411 165.1,450 C165.1,445.589 168.86845,442 173.5,442 C178.13155,442 181.9,445.589 181.9,450 C181.9,454.411 178.13155,458 173.5,458 M173.5,440 C167.70085,440 163,444.477 163,450 C163,455.523 167.70085,460 173.5,460 C179.29915,460 184,455.523 184,450 C184,444.477 179.29915,440 173.5,440"
											id="minus_circle-[#1426]"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</button>
					<span className="m-2">1</span>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							width="30px"
							height="30px"
							viewBox="0 -0.5 21 21"
							version="1.1"
						>
							<title>plus_circle [#1427]</title>
							<desc>Created with Sketch.</desc>
							<defs></defs>
							<g
								id="Page-1"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="Dribbble-Light-Preview"
									transform="translate(-179.000000, -600.000000)"
									fill="#000000"
								>
									<g id="icons" transform="translate(56.000000, 160.000000)">
										<path
											d="M137.7,450 C137.7,450.552 137.2296,451 136.65,451 L134.55,451 L134.55,453 C134.55,453.552 134.0796,454 133.5,454 C132.9204,454 132.45,453.552 132.45,453 L132.45,451 L130.35,451 C129.7704,451 129.3,450.552 129.3,450 C129.3,449.448 129.7704,449 130.35,449 L132.45,449 L132.45,447 C132.45,446.448 132.9204,446 133.5,446 C134.0796,446 134.55,446.448 134.55,447 L134.55,449 L136.65,449 C137.2296,449 137.7,449.448 137.7,450 M133.5,458 C128.86845,458 125.1,454.411 125.1,450 C125.1,445.589 128.86845,442 133.5,442 C138.13155,442 141.9,445.589 141.9,450 C141.9,454.411 138.13155,458 133.5,458 M133.5,440 C127.70085,440 123,444.477 123,450 C123,455.523 127.70085,460 133.5,460 C139.29915,460 144,455.523 144,450 C144,444.477 139.29915,440 133.5,440"
											id="plus_circle-[#1427]"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</button>
				</div>
				<span className="float-right mt-4 p-2 text-lg font-medium">
					&#8377; {props.price}
				</span>
			</div>
		</div>
	);
};

export default MenuItem;
