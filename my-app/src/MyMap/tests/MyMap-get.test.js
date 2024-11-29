import { MyMap } from "../MyMap.js";

test("`MyMap` should be have correct method `get` (like `Map`)", () => {
	const obj = {
		a: 1,
		b: "2",
	};
	obj["a b c"] = 3;
	const map = new MyMap(obj);
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe("2");
	expect(map.get("a b c")).toBe(3);

	map.set(1, true);
	expect(map.get(1)).toBe(true);
	expect(map.get("1")).toBeUndefined();

	const objValue = "obj value";
	map.set(obj, "obj value");
	expect(map.get(obj)).toBe(objValue);

	const arr = ["a", "b", "c", "d"];
	const arrValue = "arr value";
	map.set(arr, arrValue);
	expect(map.get(arr)).toBe(arrValue);

	const sym = Symbol("key");
	const symValue = "sym value";
	map.set(sym, symValue);
	expect(map.get(sym)).toBe(symValue);

	const zero = 0;
	const zeroValue = "zero value";
	map.set(zero, zeroValue);
	expect(map.get(zero)).toBe(zeroValue);

	const nan = NaN;
	const nanValue = "nan value";
	map.set(nan, nanValue);
	expect(map.get(nan)).toBe(nanValue);

	expect(map.get("a b c d")).toBeUndefined();
	expect(map.get({})).toBeUndefined();
	expect(map.get([])).toBeUndefined();
	expect(map.get(undefined)).toBeUndefined();
	expect(map.get(null)).toBeUndefined();
	expect(map.get(false)).toBeUndefined();
});
