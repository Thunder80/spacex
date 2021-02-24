import { ReactNode } from "react";

interface LabelProps {
	title: string;
	value: ReactNode;
}

export default function Label({ title, value }: LabelProps) {
	return (
		<p
			className={
				"text-lg font-semibold mt-2" +
				(typeof value !== "string" ? " flex items-center " : "")
			}
		>
			{title} -{" "}
			<span
				className={
					"font-normal text-md" +
					(typeof value !== "string" ? " ml-2 mt-1 " : "")
				}
			>
				{value}
			</span>
		</p>
	);
}
