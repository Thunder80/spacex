import React, { MouseEvent } from "react";

interface ButtonProps {
	text: string;
	className?: string;
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text, className, onClick }: ButtonProps) {
	return (
		<button
			className={`px-2 py-1 border rounded-md bg-blue transition text-white text-md hover:text-blue hover:bg-white duration-500 ${className}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
}
