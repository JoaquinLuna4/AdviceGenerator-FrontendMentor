import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import icon_dice from "./images/icon-dice.svg";
import divider_mobile from "./images/pattern-divider-mobile.svg";
import divider_desktop from "./images/pattern-divider-desktop.svg";

const url = "https://api.adviceslip.com/advice";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	console.log(isLoading);
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((advice) => {
				setData(advice);
				setIsLoading(false);
			});
	}, []);

	const handleChange = () => {
		setIsLoading(true);
		fetch(url)
			.then((response) => response.json())
			.then((advice) => {
				setData(advice);
				setIsLoading(false);
			});
	};

	return isLoading ? (
		<>
			<div className="App">
				<div className="advice_container">
					<header className="advice_id loading_id"></header>
					<body className="advice_body">
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<div class="advice_text loading_text"></div>
						<span className="divider">
							<img
								className="icon_divider"
								src={divider_mobile}
								alt="divider img"
							/>
						</span>
					</body>
					<span className="container_dice" onClick={handleChange}>
						<button>
							<img className="icon_dice" src={icon_dice} alt="Icon Dice" />
						</button>
					</span>
				</div>
			</div>
		</>
	) : (
		<div className="App">
			<div className="advice_container">
				<header className="advice_id">Advice #{data.slip.id}</header>
				<body className="advice_body">
					<p className="advice_text">{data.slip.advice}</p>

					<span className="divider">
						<img
							className="icon_divider"
							src={divider_mobile}
							alt="divider img"
						/>
					</span>
				</body>
				<span className="container_dice" onClick={handleChange}>
					<button>
						<img className="icon_dice" src={icon_dice} alt="Icon Dice" />
					</button>
				</span>
			</div>
		</div>
	);
}

export default App;
