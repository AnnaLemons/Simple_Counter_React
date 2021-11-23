import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
	const [number, setNumber] = useState(props.start);

	useEffect(() => {
		const interval = setInterval(() => {
			if (props.isRunning) {
				if (number != 9) {
					setNumber(number + 1);
				} else {
					setNumber(0);
				}
			}
		}, props.time);
		return () => clearInterval(interval);
	}, [number, props.isRunning]);

	useEffect(() => {
		setNumber(0);
	}, [props.isReset]);

	return (
		<div>
			<span>{number}</span>
		</div>
	);
}

Counter.propTypes = {
	start: PropTypes.number,
	time: PropTypes.number,
	isRunning: PropTypes.bool,
	isReset: PropTypes.bool
};

export default Counter;
