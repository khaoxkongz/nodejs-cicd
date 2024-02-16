import { describe } from "node:test";
import { max, min, avg } from "../src/index";

// describe("a", () => {
// 	test("", () => {
// 		console.log("test a");
// 	});
// 	it("", () => {
// 		console.log("it a");
// 	});
// });

// describe("b", () => {
// 	test("", () => {
// 		console.log("test b");
// 	});
// 	it("", () => {
// 		console.log("it b");
// 	});
// });

describe("test max", () => {
	test("empthy array should throw error", () => {
		expect(() => {
			max([]);
		}).toThrow();
	});

	test("array with sigle element sould return that element", () => {
		expect(max([1])).toEqual(1);
	});

	test("tuple should return max in array", () => {
		const test: [number[], number] = [[1, 2, 3], 3];
		const [input, expexted] = test;
		expect(max(input)).toEqual(expexted);
	});

	test("array of tuple should return max in array", () => {
		const tests: [number[], number][] = [
			[[1, 2, 3], 3],
			[[-1, -2], -1],
			[[7, 8, 1], 8],
		];

		tests.forEach((test) => {
			const [input, expexted] = test;
			expect(max(input)).toEqual(expexted);
		});
	});
});

describe("test min", () => {
	test("empthy array should throw error", () => {
		expect(() => {
			min([]);
		}).toThrow();
	});

	test("array with sigle element sould return that element", () => {
		expect(min([-1])).toEqual(-1);
	});

	test("tuple should return min in array", () => {
		const test: [number[], number] = [[1, 2, 3], 1];
		const [input, expexted] = test;
		expect(min(input)).toEqual(expexted);
	});

	test("array of tuple should return min in array", () => {
		const tests: [number[], number][] = [
			[[1, 2, 3], 1],
			[[-1, -2], -2],
			[[7, 8, 1], 1],
		];

		tests.forEach((test) => {
			const [input, expexted] = test;
			expect(min(input)).toEqual(expexted);
		});
	});
});

describe("test avg", () => {
	test("empthy array should throw error", () => {
		expect(() => {
			avg([]);
		}).toThrow();
	});

	test("array with sigle element sould return that element", () => {
		expect(avg([33])).toEqual(33);
	});

	test("tuple should return avg in array", () => {
		const test: [number[], number] = [[1, 2, 3], 2];
		const [input, expexted] = test;
		expect(avg(input)).toEqual(expexted);
	});

  test("array of tuple should return min in array", () => {
		const tests: [number[], number][] = [
			[[1, 2, 3], 2],
			[[-1, -2], -1.5],
			[[-10, 0, 10], 0],
		];

		tests.forEach((test) => {
			const [input, expexted] = test;
			expect(avg(input)).toEqual(expexted);
		});
	});
});
