import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
	const [number, setNumber] = useState(0);

	return (
		<>
			<div>{number}</div>
			<button
				onClick={() => {
					setNumber((prev) => prev + 1);
				}}
			>
				+
			</button>
			<Todo />
		</>
	);
};

export default App;
