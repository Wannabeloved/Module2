import { MyMap } from "../MyMap.js";

test("`MyMap` should be able to be created with empty arguments", () => {
	const map = new MyMap();
	expect(map).toBeInstanceOf(MyMap);
	expect(map.size).toBe(0);
});

test("`MyMap` should be able to be created from `Object`", () => {
	const obj = {
		a: 1,
		b: "2",
	};
	const map1 = new MyMap(obj);
	expect(map1).toBeInstanceOf(MyMap);
	expect(map1.get("a")).toBe(1);
	expect(map1.get("b")).toBe("2");

	const obj2 = new Object();
	obj2["a b c"] = 3;
	const map2 = new MyMap(obj2);
	expect(map2).toBeInstanceOf(MyMap);
	expect(map2.get("a b c")).toBe(3);

	expect(new MyMap({ obj: true })).toBeInstanceOf(MyMap);
	expect(new MyMap({})).toBeInstanceOf(MyMap);
});

test("`MyMap` should be able to be created from (entries) `Array`", () => {
	const objectEntries = Object.entries({ a: 1, b: "2" });
	expect(new MyMap(objectEntries)).toBeInstanceOf(MyMap);

	const objectEntriesArray = Array.from(Object.entries({ a: 1, b: "2" }));
	expect(new MyMap(objectEntriesArray)).toBeInstanceOf(MyMap);

	const newArray = new Array([
		["a", 1],
		[2, "2"],
		[{ 0: 1 }, true],
	]);
	expect(new MyMap(newArray)).toBeInstanceOf(MyMap);

	expect(new MyMap(new Array())).toBeInstanceOf(MyMap);
	expect(new MyMap([])).toBeInstanceOf(MyMap);
	// expect(new MyMap(obj).map(([, v]) => v)).toBeInstanceOf(Array);
	// expect(new MyMap({ "a b c": 3 }).map(([, v]) => v)).toBeInstanceOf(Array);
});

test("`MyMap` should be able to be created from `MyMap`", () => {
	const map1 = new MyMap();
	const map2 = new MyMap(new MyMap());
	expect(map1).toBeInstanceOf(MyMap);
	expect(map2).toBeInstanceOf(MyMap);

	const map3 = new MyMap({ a: 1, b: "2" });
	const map4 = new MyMap(new MyMap(map3));
	expect(map3).toEqual(map4);
	expect(map4.get("a")).toBe(1);
	expect(map4.size).toBe(2);
});
