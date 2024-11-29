import { MyMap } from "../MyMap.js";

test("The `filter` method of instances `MyMap` should only pass a value if the condition is true", () => {
	const myMap = new MyMap([
		["a", 1],
		["b", 2],
		["c", 3],
	]);

	expect(myMap.filter(([k, v]) => v > 1)).toEqual(
		new MyMap([
			["b", 2],
			["c", 3],
		]),
	);
	expect(myMap.filter(([k, v]) => v > 2)).toEqual(new MyMap([["c", 3]]));
	expect(myMap.filter(([k, v]) => v < 3)).toEqual(
		new MyMap([
			["a", 1],
			["b", 2],
		]),
	);
	expect(myMap.filter(([k, v]) => v === 1)).toEqual(new MyMap([["a", 1]]));
	expect(myMap.filter(([k, v]) => true)).toEqual(
		new MyMap([
			["a", 1],
			["b", 2],
			["c", 3],
		]),
	);
	expect(myMap.filter(([k, v]) => false)).toEqual(new MyMap());
});
