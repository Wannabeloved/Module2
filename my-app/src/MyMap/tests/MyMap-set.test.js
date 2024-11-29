import { MyMap } from "../MyMap.js";

test("`MyMap` should be have correct method `set` (like `Map`)", () => {
	const obj = {
		a: 1,
		b: "2",
	};
	obj["a b c"] = 3;
	const map = new MyMap();
	map.set("a", 1);
	map.set("b", "2");
	map.set("a b c", 3);
	map.set(obj, "obj value");

	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe("2");
	expect(map.get("a b c")).toBe(3);
	expect(map.get(obj)).toBe("obj value");

	expect(map.set(42, 42)).toBeInstanceOf(MyMap);
	expect(map.set("a", "a")).toBeInstanceOf(MyMap);
	expect(map.set(obj, obj)).toBeInstanceOf(MyMap);
});
