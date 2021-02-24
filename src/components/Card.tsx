import React from "react";

import { RiArticleLine } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { FaCheck, FaTimes, FaWikipediaW } from "react-icons/fa";

import Label from "./Label";

interface CardProps {
	rocket: any;
	expand: boolean;
}

export default function Card({ rocket }: CardProps) {
	const date = new Date(rocket.launch_date_local);
	const day = date.getDate();
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"
	];
	const month = date.getMonth();
	const year = date.getFullYear();

	return (
		<div
			className={
				"p-4 m-4 w-full lg:w-5/12 flex justify-center rounded-md shadow-xl hover:shadow-2xl transition duration-300 height-transition overflow-hidden"
			}
		>
			<div className="w-full block md:flex">
				<div className="w-full md:w-2/3">
					<div className="text-3xl font-bold justify-self-start underline">
						{rocket.mission_name}
					</div>
					<div className="mt-4">
						<Label
							title="Launch Date"
							value={` ${day} ${months[month]}, ${year}`}
						/>
						<Label
							title="Launch Time"
							value={` ${date.getHours()}:${date.getMinutes()}`}
						/>
						<Label
							title="Launch Site"
							value={rocket.launch_site.site_name}
						/>
						<Label title="Launch Summary" value={rocket.details} />

						<Label
							title="Rocket Name"
							value={rocket.rocket.rocket_name}
						/>
						<Label
							title="Rocket Type"
							value={rocket.rocket.rocket_type}
						/>
						<Label
							title="Launch Success"
							value={
								rocket.launch_success ? (
									<FaCheck color={"#63c642"} />
								) : (
									<FaTimes color={"#da1f26"} />
								)
							}
						/>
					</div>
				</div>
				<div className="w-full md:w-1/3 flex flex-col justify-center">
					<img
						style={{ width: "75%" }}
						src={rocket.links.mission_patch}
						className="mx-auto mt-2"
						alt="mission_patch"
					/>
					<div className="mt-6 flex justify-around">
						<RiArticleLine
							onClick={() =>
								window.open(
									`${rocket.links.article_link}`,
									"_blank"
								)
							}
							size={30}
							className="hover:text-blue cursor-pointer"
						/>
						<AiFillYoutube
							onClick={() =>
								window.open(
									`${rocket.links.video_link}`,
									"_blank"
								)
							}
							size={30}
							className="hover:text-red-600 cursor-pointer"
						/>
						<FaWikipediaW
							onClick={() =>
								window.open(
									`${rocket.links.wikipedia}`,
									"_blank"
								)
							}
							size={30}
							className="hover:text-gray-500 cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
