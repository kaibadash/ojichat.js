import { Generator } from "../src/generator/Generator";

describe("Generator", () => {
  beforeAll(async () => { });

  // TODO:本気出す
  it("Generator", () => {
    expect(new Generator("").getMessage().length).toBeGreaterThan(0);
  });
});
