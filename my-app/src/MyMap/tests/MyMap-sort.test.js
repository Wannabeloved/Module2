import { MyMap } from "../MyMap";

const entries = [
	["a", 3],
	["b", 2],
	["c", 1],
];
const myMap = new MyMap(entries);

// =========================== test constructors =================================

const createTests = (currentTest) => (arg, option, map) => {
	currentTest(arg, undefined, option);
	currentTest(arg, map || myMap, option);
};

const toThrowTest = (arg, map, error) =>
	expect(() => (map || new MyMap()).sort(arg)).toThrow(error || TypeError);

const toBeInstanceOfTest = (_, map, instance) =>
	expect((map || new MyMap()).sort(() => {})).toBeInstanceOf(instance || MyMap);

const toEqualTest = (arg, map, expected) =>
	expect((map || new MyMap()).sort(arg)).toEqual(expected || new MyMap());

// ================================= tests =======================================

test("Method `sort` should throw an TypeError if the argument is not a function", () => {
	const tests = createTests(toThrowTest);
	tests();
	tests(null);
	tests([]);
	tests({});
	tests(3);
	tests("");
	toThrowTest([], "Callback is not a function");
});

test("Method `sort` should return instance of `MyMap`", () => {
	const tests = createTests(toBeInstanceOfTest);
	let _ = undefined;
	tests(_);
	tests(_, _, myMap);
});

test("Method `sort` should return `MyMap` sorting `a` after `b` if callback return positive number, and `b` after `a` if callback return negative number", () => {
	toEqualTest(
		(a, b) => {
			const [k1, v1] = a;
			const [k2, v2] = b;
			return v2 - v1;
		},
		new MyMap(entries),
		new MyMap(entries.toReversed()),
	);

	const newEntries = [
		["a", "b"],
		["c", "d"],
		["e", "f"],
	];
	toEqualTest(
		(a, b) => {
			const [k1, v1] = a;
			const [k2, v2] = b;
			return k1.localeCompare(k2);
		},
		new MyMap(newEntries),
		new MyMap(newEntries),
	);

	toEqualTest(
		(a, b) => {
			const [k1, v1] = a;
			const [k2, v2] = b;
			return k2.localeCompare(k1);
		},
		new MyMap(newEntries),
		new MyMap(newEntries.toReversed()),
	);
});
