import React, { ChangeEvent } from "react";

interface InputProps {
	name: string;
	options: {
		key: string;
		value: string;
	}[];
	defaultValue?: string;
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Input({
	name,
	options,
	defaultValue,
	onChange
}: InputProps) {
	return (
		<div className="flex flex-col w-full p-2 md:w-auto">
			<label className="mb-2 text-lg font-semibold" htmlFor={name}>
				{name}
			</label>
			<select
				name={name}
				className="p-1 w- rounded-md"
				onChange={onChange}
				value={defaultValue}
			>
				<option value="">None</option>
				{options.map((e) => {
					return <option value={e.value}>{e.key}</option>;
				})}
			</select>
		</div>
	);
}
