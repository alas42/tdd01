console.log("test");


export function fizz(a: number): string {
	if (a % 3 === 0 && a % 5 === 0)
		return "FIZZBUZZ";
	if (a % 3 === 0)
		return "FIZZ";
	if (a % 5 === 0)
		return "BUZZ";
	return a.toString();
}
