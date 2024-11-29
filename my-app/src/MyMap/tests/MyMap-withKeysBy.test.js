import { MyMap } from "../MyMap.js";

const entriesWithObjects = [
	["0", { a: 1 }],
	["1", { a: 2 }],
	[Symbol("2"), { a: "7" }],
	["3", { a: { b: 1 } }],
];
const entriesWithArrays = [
	["0", [1]],
	["1", [2]],
	[Symbol("2"), ["7"]],
	["3", [{ b: 1 }]],
];
const myMap = new MyMap(entriesWithObjects);

test("Method `withKeysBy` of instances `MyMap` should return new `MyMap`", () => {
	const mapWithKeysBy = myMap.withKeysBy();
	const mapWithKeysBy2 = myMap.withKeysBy("a");

	expect(mapWithKeysBy).toBeInstanceOf(MyMap);
	expect(mapWithKeysBy2).toBeInstanceOf(MyMap);

	expect(myMap === mapWithKeysBy).toBe(false);
});

test("Method `withKeysBy` of instances `MyMap` should put correct keys by selector", () => {
	const selector = "a";
	expect(myMap.withKeysBy(selector)).toEqual(
		new MyMap(entriesWithObjects.map(([, v]) => [v[selector], v])),
	);

	const selector2 = 0;
	expect(new MyMap(entriesWithArrays).withKeysBy(selector2)).toEqual(
		new MyMap(entriesWithArrays.map(([, v]) => [v[selector2], v])),
	);
});
