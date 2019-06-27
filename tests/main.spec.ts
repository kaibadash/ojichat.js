import { Generator } from "../src/generator/Generator";

describe("Generator", () => {
  beforeAll(async () => { });

  // TODO:本気出す
  it("Generator", () => {
    console.log(new Generator().getMessage());
    expect(new Generator("").getMessage().length).toBeGreaterThan(0);
    expect(new Generator("kaiba").getMessage().length).toBeGreaterThan(0);
    expect(new Generator("kaiba", 1).getMessage().length).toBeGreaterThan(0);
  });
});
