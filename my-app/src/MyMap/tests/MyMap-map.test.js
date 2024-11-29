import { MyMap } from "../MyMap.js";

test("prototype `MyMap` should to have method `map`", () => {
	expect(MyMap.prototype.map).toBeInstanceOf(Function);
});

const obj = { a: 1, b: 2, c: "3" };
const myMap = new MyMap(obj);

test("Method `map` of instances `MyMap` should return `Array`", () => {
	expect(myMap.map()).toBeInstanceOf(Array);
	expect(myMap.map(() => "1")).toBeInstanceOf(Array);
});

test("Method `map` of instances `MyMap` should correct iterate 'keys'", () => {
	const keys = myMap.map(([k]) => k);
	expect(keys).toEqual(Array.from(myMap.keys()));
	expect(keys.length).toBe(myMap.size);
});

test("Method `map` of instances `MyMap` should correct iterate 'values'", () => {
	const values = myMap.map(([, v]) => v);
	expect(values).toEqual(Array.from(myMap.values()));
	expect(values.length).toBe(myMap.size);
});
