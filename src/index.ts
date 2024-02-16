//
//
//

export function max(numbers: number[]): number {
	if (!numbers.length) throw Error("numbers was empthy");
	let currMax = numbers[0];
	numbers.forEach((number) => {
		if (number > currMax) {
			currMax = number;
		}
	});

	return currMax;
}

export function min(numbers: number[]): number {
	if (!numbers.length) throw Error("numbers was empthy");
	let currMin = numbers[0];
	numbers.forEach((number) => {
		if (number < currMin) {
			currMin = number;
		}
	});

	return currMin;
}

export function avg(numbers: number[]): number {
	if (!numbers.length) throw Error("numbers was empthy");
	const sum = numbers.reduce((result, number) => {
		return result + number;
	});

	return sum / numbers.length;
}
