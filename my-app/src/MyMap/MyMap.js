export class MyMap extends Map {
	constructor(items) {
		if (!items?.constructor) return super(items);

		switch (items.constructor) {
			case Object:
				return super(Object.entries(items));
			case Array:
				if (items[0]?.length === 2) return super(items);
				let i = 0;
				return super(items.map((el) => [i++, el]));
			default:
				return super(items);
		}
	}
	map(callback) {
		const result = [];
		if (callback) {
			for (const el of this) {
				result.push(callback(el));
			}
		}
		return result;
	}
	withKeysBy(selector) {
		const entries = this.map(([, v]) => {
			if (v.constructor === Object || v.constructor === Array)
				return [v[selector], v];
			if (v.constructor === Map || v.constructor === MyMap || Set)
				return [v.get(selector), v];
			return [selector, v];
		});
		return new MyMap(entries);
	}
	filter(callback) {
		const filteredMap = new MyMap(this);
		for (const keyAndValue of filteredMap) {
			if (!callback(keyAndValue)) filteredMap.delete(keyAndValue[0]);
		}
		return filteredMap;
	}
	find(callback, options = { strict: false }) {
		if (typeof callback !== "function")
			throw new TypeError("callback is not a function");

		/* Хоть так писать и не правильно, но зато работает быстро; реализация в любом случае скрыта */
		if (options.strict === false) {
			for (const keyAndValue of this) {
				if (callback(keyAndValue)) return keyAndValue;
			}
		} else {
			for (const keyAndValue of this) {
				if (callback(keyAndValue) === true) return keyAndValue;
			}
		}
		return undefined;
	}
	findIndex() {}
	sort(callback) {
		if (typeof callback !== "function")
			throw new TypeError("callback is not a function");

		const sortedArray = Array.from(this).sort(callback);

		return new MyMap(sortedArray);
	}
}
