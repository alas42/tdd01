import { fizz } from "../src/fizz.main";

describe('fizzbuzz', () => {
  test('Should return the number if not fizzbuzz', () => {
	  expect(fizz(1)).toBe("1");
  });

  test('Should return fizz if multiple of 3', () => {
	  expect(fizz(3)).toBe("FIZZ");
	  expect(fizz(9)).toBe("FIZZ");
  });

  test('Should return buzz if multiple of 5', () => {
	  expect(fizz(5)).toBe("BUZZ");
	  expect(fizz(20)).toBe("BUZZ");
  });

  test('Should return fizzbuzz if multiple of 3 and 5', () => {
	  expect(fizz(15)).toBe("FIZZBUZZ");
  });

  test('Should return the number if not fizz AND/OR buzz', () => {
	  expect(fizz(7)).toBe("7");
  });
})