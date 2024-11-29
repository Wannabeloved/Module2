import { MyMap } from "../MyMap";

const entries = [
	["a", 1],
	["b", 2],
	["c", 3],
];
const myMap = new MyMap(entries);

test('The `find` method of instances `MyMap` should throw an TypeError ("callback is not a function") if the argument is not a function', () => {
	expect(() => myMap.find()).toThrow(TypeError);
	expect(() => myMap.find()).toThrow("callback is not a function");

	expect(() => myMap.find([])).toThrow(TypeError);
	expect(() => myMap.find({})).toThrow("callback is not a function");
	expect(() => myMap.find(3)).toThrow(TypeError);
	expect(() => myMap.find("abc")).toThrow("callback is not a function");

	expect(() => myMap.find(() => {})).not.toThrow(TypeError);
	expect(() => myMap.find(() => 0)).not.toThrow("callback is not a function");
	expect(() => myMap.find(() => 11)).not.toThrow(TypeError);
});

const createArgsWithOptions =
	(options) =>
	(...args) => [...args, options];

test("The `find` method, if option.strict is true, should return key&value only if callback result strict equal `true`", () => {
	const args = createArgsWithOptions({ strict: true });

	expect(myMap.find(...args(() => true))).toEqual(entries[0]);
	expect(myMap.find(...args(() => false))).toBeUndefined();

	expect(myMap.find(...args(() => ({})))).toBeUndefined();
	expect(myMap.find(...args(() => []))).toBeUndefined();
	expect(myMap.find(...args(() => 1))).toBeUndefined();
	expect(myMap.find(...args(() => "abc"))).toBeUndefined();
});

test("The `find` method, if `option` not passed or `option.strict` is `false`, should return key&value if callback result non-strict equal `true` (1, {}, [], etc.)", () => {
	const args = createArgsWithOptions({ strict: false });

	expect(myMap.find(...args(() => true))).toEqual(entries[0]);
	expect(myMap.find(...args(() => false))).toBeUndefined();

	expect(myMap.find(...args(() => ({})))).not.toBeUndefined();
	expect(myMap.find(...args(() => []))).not.toBeUndefined();

	expect(myMap.find(...args(() => 1))).not.toBeUndefined();
	expect(myMap.find(...args(() => 0))).toBeUndefined();

	expect(myMap.find(...args(() => "abc"))).not.toBeUndefined();
	expect(myMap.find(...args(() => ""))).toBeUndefined();
});

test("The `find` method of instances `MyMap` should return instance of `Array` if element finded", () => {
	expect(myMap.find(([k, v]) => v < 2)).toBeInstanceOf(Array);
	expect(myMap.find(([k, v]) => true)).toBeInstanceOf(Array);
});

test("The `find` method of instances `MyMap` should return `undefined` if element not finded", () => {
	expect(myMap.find(([k, v]) => v > Infinity)).toBeUndefined();
	expect(myMap.find(([k, v]) => false)).toBeUndefined();
});

test("The `find` method of instances `MyMap` should return the first [key, value] pair that matches the condition", () => {
	const testCallback1 = ([k, v]) => v > 1;
	expect(myMap.find(testCallback1)).toEqual(entries.find(testCallback1));

	const testCallback2 = ([k, v]) => v > 2;
	expect(myMap.find(testCallback2)).toEqual(entries.find(testCallback2));

	const testCallback3 = ([k, v]) => v < 3;
	expect(myMap.find(testCallback3)).toEqual(entries.find(testCallback3));

	const testCallback4 = ([k, v]) => v === 1;
	expect(myMap.find(testCallback4)).toEqual(entries.find(testCallback4));

	const testCallback5 = ([k, v]) => true;
	expect(myMap.find(testCallback5)).toEqual(entries.find(testCallback5));

	const testCallback6 = ([k, v]) => false;
	expect(myMap.find(testCallback6)).toBeUndefined();
});
