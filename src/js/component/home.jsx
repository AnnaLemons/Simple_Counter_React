import React, { useState } from "react";
import Counter from "./Counter.jsx";

const Home = () => {
	const [isRunning, setIsRunning] = useState();
	const [isReset, setIsReset] = useState(true);
	const resetButton = () => {
		setIsReset(!isReset);
	};

	return (
		<div className="counters">
			<div className="boxes">
				<Counter
					className="item1"
					time={1000000}
					isRunning={isRunning}
					isReset={isReset}
				/>
				<Counter
					className="item2"
					time={100000}
					isRunning={isRunning}
					isReset={isReset}
				/>
				<Counter
					className="item3"
					time={10000}
					isRunning={isRunning}
					isReset={isReset}
				/>
				<Counter
					className="item4"
					time={1000}
					isRunning={isRunning}
					isReset={isReset}
				/>
			</div>

			<div className="buttons">
				<button
					className="button play"
					onClick={() => {
						setIsRunning(true);
					}}>
					<i className="fas fa-play-circle"></i>
				</button>
				<button
					className="button button-2 pause"
					onClick={() => {
						setIsRunning(false);
					}}>
					<i className="fas fa-pause-circle"></i>
				</button>
				<button className="button button-3 reset" onClick={resetButton}>
					<i className="fas fa-power-off"></i>
				</button>
			</div>
		</div>
	);
};

export default Home;
