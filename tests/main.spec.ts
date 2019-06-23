import { Generator } from '../src/generator/Generator';

describe('Generator', () => {
  beforeAll(async () => { });

  it('Generator', () => {
    expect("Fizz").toBe(new Generator("").getMessage());
  });
});
