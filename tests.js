const expect = chai.expect;

// ── integerToRoman · Manual Set 1 ──────────────────────────────
describe('integerToRoman — Manual Test Cases (Set 1)', function () {

  it('TC-I2R-M1: BVA Lower Boundary — integerToRoman(1) → "I"', function () {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('TC-I2R-M2: BVA Upper Boundary — integerToRoman(3999) → "MMMCMXCIX"', function () {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('TC-I2R-M3: Valid Representative — integerToRoman(2000) → "MM"', function () {
    expect(integerToRoman(2000)).to.equal('MM');
  });

  it('TC-I2R-M4: BVA Below Lower — integerToRoman(0) throws', function () {
    expect(() => integerToRoman(0)).to.throw('The number must be between 1 and 3999.');
  });

  it('TC-I2R-M5: BVA Above Upper — integerToRoman(4000) throws', function () {
    expect(() => integerToRoman(4000)).to.throw('The number must be between 1 and 3999.');
  });

  it('TC-I2R-M6: Negative Input — integerToRoman(-1) throws', function () {
    expect(() => integerToRoman(-1)).to.throw('The number must be between 1 and 3999.');
  });

  it('TC-I2R-M7: Fraction Input — integerToRoman(3.5) throws [EXPECTED FAIL — bug]', function () {
    // Bug: 3.5 passes the range check and silently returns "III" instead of throwing.
    expect(() => integerToRoman(3.5)).to.throw();
  });

});

// ── integerToRoman · AI Set 2 ──────────────────────────────────
describe('integerToRoman — AI-Generated Test Cases (Set 2)', function () {

  it('TC-I2R-AI1: Subtraction Logic — integerToRoman(4) → "IV"', function () {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('TC-I2R-AI2: Subtraction Logic — integerToRoman(9) → "IX"', function () {
    expect(integerToRoman(9)).to.equal('IX');
  });

  it('TC-I2R-AI3: Complex Number — integerToRoman(1994) → "MCMXCIV"', function () {
    expect(integerToRoman(1994)).to.equal('MCMXCIV');
  });

  it('TC-I2R-AI4: Max Output — integerToRoman(3999) → "MMMCMXCIX"', function () {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('TC-I2R-AI5: Null Input — integerToRoman(null) throws', function () {
    expect(() => integerToRoman(null)).to.throw('The number must be between 1 and 3999.');
  });

});

// ── romanToInteger · Manual Set 1 ─────────────────────────────
describe('romanToInteger — Manual Test Cases (Set 1)', function () {

  it('TC-R2I-M1: BVA Smallest — romanToInteger("I") → 1', function () {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('TC-R2I-M2: BVA Largest — romanToInteger("MMMCMXCIX") → 3999', function () {
    expect(romanToInteger('MMMCMXCIX')).to.equal(3999);
  });

  it('TC-R2I-M3: Valid Representative — romanToInteger("MDCLXVI") → 1666', function () {
    expect(romanToInteger('MDCLXVI')).to.equal(1666);
  });

  it('TC-R2I-M4: >3 Repetitions — romanToInteger("IIII") throws', function () {
    expect(() => romanToInteger('IIII')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC-R2I-M5: Invalid Subtraction — romanToInteger("IL") throws', function () {
    expect(() => romanToInteger('IL')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC-R2I-M6: Invalid Character — romanToInteger("A") throws', function () {
    expect(() => romanToInteger('A')).to.throw('The Roman numeral contains invalid characters.');
  });

  it('TC-R2I-M7: Empty Input — romanToInteger("") throws', function () {
    expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.');
  });

});

// ── romanToInteger · AI Set 2 ──────────────────────────────────
describe('romanToInteger — AI-Generated Test Cases (Set 2)', function () {

  it('TC-R2I-AI1: Valid Subtraction — romanToInteger("IV") → 4', function () {
    expect(romanToInteger('IV')).to.equal(4);
  });

  it('TC-R2I-AI2: Complex — romanToInteger("MCMXCIV") → 1994', function () {
    expect(romanToInteger('MCMXCIV')).to.equal(1994);
  });

  it('TC-R2I-AI3: Invalid VX — romanToInteger("VX") throws', function () {
    expect(() => romanToInteger('VX')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('TC-R2I-AI4: Whitespace — romanToInteger(" X ") throws (space fails regex)', function () {
    expect(() => romanToInteger(' X ')).to.throw();
  });

  it('TC-R2I-AI5: Lowercase — romanToInteger("x") → 10 (toUpperCase applied)', function () {
    expect(romanToInteger('x')).to.equal(10);
  });

});