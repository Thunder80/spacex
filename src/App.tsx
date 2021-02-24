import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";

import Card from "./components/Card";
import Input from "./components/Input";

function App(props: any) {
	const [rockets, setRockets] = useState<any>(null);
	const [launchSuccess, setLaunchSuccess] = useState<string | null>(null);
	const [landSuccess, setLandSuccess] = useState<string | null>(null);
	const [year, setYear] = useState<string | null>(null);

	const booleanOptions = [
		{
			key: "Success",
			value: "true"
		},
		{ key: "Failure", value: "false" }
	];

	const years = [
		{
			key: "2006",
			value: "2006"
		},
		{
			key: "2007",
			value: "2007"
		},
		{
			key: "2008",
			value: "2008"
		},
		{
			key: "2009",
			value: "2009"
		},
		{
			key: "2010",
			value: "2010"
		},
		{
			key: "2011",
			value: "2011"
		},
		{
			key: "2012",
			value: "2012"
		},
		{
			key: "2013",
			value: "2013"
		},
		{
			key: "2014",
			value: "2014"
		},
		{
			key: "2015",
			value: "2015"
		},
		{
			key: "2016",
			value: "2016"
		},
		{
			key: "2017",
			value: "2017"
		},
		{
			key: "2018",
			value: "2018"
		},
		{
			key: "2019",
			value: "2019"
		},
		{
			key: "2020",
			value: "2020"
		},
		{
			key: "2021",
			value: "2021"
		}
	];

	useEffect(() => {
		const parsedUrl = new URL(window.location.href).searchParams;
		let params = "";
		console.log(
			parsedUrl.get("launch_success"),
			parsedUrl.get("land_success"),
			parsedUrl.get("launch_year")
		);
		if (parsedUrl.get("launch_success")) {
			params += `&launch_success=${parsedUrl.get("launch_success")}`;
			setLaunchSuccess(parsedUrl.get("launch_success"));
		}
		if (parsedUrl.get("land_success")) {
			params += `&land_success=${parsedUrl.get("land_success")}`;
			setLandSuccess(parsedUrl.get("land_success"));
		}

		if (parsedUrl.get("launch_year")) {
			params += `&launch_year=${parsedUrl.get("launch_year")}`;
			setYear(parsedUrl.get("launch_year"));
		}
		axios
			.get("https://api.spaceXdata.com/v3/launches?limit=100" + params)
			.then((res) => setRockets(res.data));
	}, []);
	return (
		<div className="bg-grey flex flex-col justify-center items-center">
			<div className="text-5xl underline font-extrabold mb-16">
				Space X
			</div>
			<div className="w-full flex flex-wrap justify-around items-center">
				<Input
					name="Launch Successfully"
					options={booleanOptions}
					onChange={(e) => setLaunchSuccess(e.target.value)}
					defaultValue={launchSuccess || ""}
				/>
				<Input
					name="Landed Successfully"
					onChange={(e) => setLandSuccess(e.target.value)}
					options={booleanOptions}
					defaultValue={landSuccess || ""}
				/>
				<Input
					name="Year"
					onChange={(e) => setYear(e.target.value)}
					options={years}
					defaultValue={year || ""}
				/>
				<div className="self-end mb-2">
					<Button
						className="h-1/2 p-4 mr-3"
						text="Apply"
						onClick={() => {
							setRockets(null);
							let params = "";
							if (launchSuccess)
								params += `&launch_success=${launchSuccess}`;
							if (landSuccess)
								params += `&land_success=${landSuccess}`;
							if (year) params += `&launch_year=${year}`;

							axios
								.get(
									"https://api.spaceXdata.com/v3/launches?limit=100" +
										params
								)
								.then((res) => setRockets(res.data));
							const url =
								window.location.protocol +
								"//" +
								window.location.host +
								window.location.pathname +
								`?${params.substring(1)}`;
							window.history.pushState({ path: url }, "", url);
						}}
					/>
					<Button
						text="Clear"
						onClick={() => {
							setLaunchSuccess(null);
							setLandSuccess(null);
							setYear(null);
							setRockets(null);
							axios
								.get(
									"https://api.spaceXdata.com/v3/launches?limit=100"
								)
								.then((res) => setRockets(res.data));
							const url =
								window.location.protocol +
								"//" +
								window.location.host +
								window.location.pathname;
							window.history.pushState({ path: url }, "", url);
						}}
					/>
				</div>
			</div>

			{rockets ? (
				<div className="w-full flex flex-wrap justify-around">
					{rockets.map((e: any) => (
						<Card rocket={e} expand={false} />
					))}
				</div>
			) : (
				"Loading..."
			)}
		</div>
	);
}

export default App;
