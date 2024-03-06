import React, { useState } from "react";

const Todo = () => {
	console.log("我被執行了");
	const [listData, setListData] = useState([
		{
			content: "要做的事情",
			id: Date.now(),
			done: false,
		},
	]);
	return (
		<>
			{listData.map((element, index) => {
				return <div key={index}>{element.content}</div>;
			})}
		</>
	);
};

export default Todo;
