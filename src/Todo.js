import React, { memo } from "react";

const Todo = ({ name, Object }) => {
	console.log("我被執行了");

	const listData = [
		{
			content: "要做的事情",
			id: Date.now(),
			done: false,
		},
	];
	return (
		<>
			<div>{name}的代辦事項</div>
			{listData.map((element, index) => {
				return <div key={index}>{element.content}</div>;
			})}
		</>
	);
};

export default memo(Todo, (oldProps, newProps) => {
	function deepCompare(a, b) {
		return JSON.stringify(a) === JSON.stringify(b);
	}
	if (
		deepCompare(oldProps.Object, newProps.Object) &&
		oldProps.name === newProps.name
	) {
		return true;
	}
});
