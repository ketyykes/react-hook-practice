import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
	const [number, setNumber] = useState(0);
	const [value, setValue] = useState("");
	const [name, setName] = useState("");
	const Object = {};
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
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<button
				onClick={() => {
					setName(value);
				}}
			>
				送出
			</button>
			<Todo name={name} Object={Object} />
		</>
	);
};

export default App;
