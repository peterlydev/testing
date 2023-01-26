const lib = require("../lib");

describe("absolute", () => {
  test("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  test("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  test("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const result = lib.greet('Pete');
        expect(result).toMatch(/Pete/);
        expect(result).toContain('Pete');
    });
});

describe('getCurrencies', () => {
  it('should return supported currencies', () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(['EUR', 'USD', 'AUD']));
  });
});
