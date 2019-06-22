import { fizzbuzz } from '../src/index';

describe('fizzbuzz', () => {
  beforeAll(async () => { });

  it('Fizz', () => {
    expect("Fizz").toBe(fizzbuzz(3));
  });
  it('Buzz', () => {
    expect("Buzz").toBe(fizzbuzz(5));
  });
  it('FizzBuzz', () => {
    expect("FizzBuzz").toBe(fizzbuzz(15));
  });
});
