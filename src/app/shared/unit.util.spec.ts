import { UnitServiceArgumentsModel } from './unit.model';
import { UnitUtil } from './unit.util';

describe('UnitUtil', () => {
  const base10Data = [
    { value: 1e26, expected: 24 },
    { value: 1e25, expected: 24 },
    { value: 1e24, expected: 24 },
    { value: 1e23, expected: 21 },
    { value: 1e22, expected: 21 },
    { value: 1e21, expected: 21 },
    { value: 1e20, expected: 18 },
    { value: 1e19, expected: 18 },
    { value: 1e18, expected: 18 },
    { value: 1e17, expected: 15 },
    { value: 1e16, expected: 15 },
    { value: 1e15, expected: 15 },
    { value: 1e14, expected: 12 },
    { value: 1e13, expected: 12 },
    { value: 1e12, expected: 12 },
    { value: 1e11, expected: 9 },
    { value: 1e10, expected: 9 },
    { value: 1e9, expected: 9 },
    { value: 1e5, expected: 3 },
    { value: 1e4, expected: 3 },
    { value: 1e3, expected: 3 },
    { value: 1e2, expected: 0 },
    { value: 1e1, expected: 0 },
    { value: 1, expected: 0 },
    { value: 0, expected: 0 },
    { value: 1e-1, expected: -3 },
    { value: 1e-2, expected: -3 },
    { value: 1e-3, expected: -3 },
    { value: 1e-7, expected: -9 },
    { value: 1e-8, expected: -9 },
    { value: 1e-9, expected: -9 },
    { value: 1e-10, expected: -12 },
    { value: 1e-11, expected: -12 },
    { value: 1e-12, expected: -12 },
    { value: 1e-13, expected: -15 },
    { value: 1e-14, expected: -15 },
    { value: 1e-15, expected: -15 },
    { value: 1e-16, expected: -18 },
    { value: 1e-17, expected: -18 },
    { value: 1e-18, expected: -18 },
    // MINIMUM! We have, with javascript, some problems
    // with these extremely small values
    // {value: 1e-19, expected: -21},
    // {value: 1e-20, expected: -21},
    // {value: 1e-21, expected: -21},
    // {value: 1e-22, expected: -24},
    // {value: 1e-23, expected: -24},
    // {value: 1e-24, expected: -24}
  ];

  base10Data.forEach((data) => {
    it(`Extract base10 "${data.expected}" for "${data.value}" value`, () => {
      expect(UnitUtil.base10(data.value)).toBe(data.expected);
    });
  });

  const doNotFixData = [
    { value: 1, fractionDigits: 2, expected: '1' },
    { value: 5, fractionDigits: 2, expected: '5' },
    { value: 9, fractionDigits: 2, expected: '9' },
    { value: 1000, fractionDigits: 2, expected: '1000' },

    { value: 1, fractionDigits: 3, expected: '1' },
    { value: 5, fractionDigits: 3, expected: '5' },
    { value: 9, fractionDigits: 3, expected: '9' },
    { value: 1000, fractionDigits: 3, expected: '1000' },
  ];

  doNotFixData.forEach((data) => {
    it(`keep "${data.value}" into "${data.expected} even if ${data.fractionDigits} digits`, () => {
      expect(
        UnitUtil.toFixedOnlyIfNecessary(data.value, data.fractionDigits),
      ).toBe(data.expected);
    });
  });

  const toFixedOnlyIfNecessaryData = [
    { value: 1.01, fractionDigits: 2, expected: '1.01' },
    { value: 1.1, fractionDigits: 2, expected: '1.10' },
    { value: 1.11, fractionDigits: 2, expected: '1.11' },
    { value: 1.015, fractionDigits: 2, expected: '1.01' },
    { value: 1.105, fractionDigits: 2, expected: '1.10' },
    { value: 1.115, fractionDigits: 2, expected: '1.11' },
    { value: 1.016, fractionDigits: 2, expected: '1.02' },
    { value: 1.106, fractionDigits: 2, expected: '1.11' },
    { value: 1.116, fractionDigits: 2, expected: '1.12' },

    { value: 1.1, fractionDigits: 3, expected: '1.100' },
    { value: 1.01, fractionDigits: 3, expected: '1.010' },
    { value: 1.1, fractionDigits: 3, expected: '1.100' },
    { value: 1.11, fractionDigits: 3, expected: '1.110' },
    { value: 1.001, fractionDigits: 3, expected: '1.001' },
    { value: 1.01, fractionDigits: 3, expected: '1.010' },
    { value: 1.1, fractionDigits: 3, expected: '1.100' },
    { value: 1.011, fractionDigits: 3, expected: '1.011' },
    { value: 1.101, fractionDigits: 3, expected: '1.101' },
    { value: 1.111, fractionDigits: 3, expected: '1.111' },
  ];

  toFixedOnlyIfNecessaryData.forEach((data) => {
    it(`transform "${data.value}" into "${data.expected}" (fix on ${data.fractionDigits} digits)`, () => {
      expect(
        UnitUtil.toFixedOnlyIfNecessary(data.value, data.fractionDigits),
      ).toBe(data.expected);
    });
  });

  const convertData = [
    { value: 1e26, expected: '100 Y' },
    { value: 1e25, expected: '10 Y' },
    { value: 1e24, expected: '1 Y' },
    { value: 1e23, expected: '100 Z' },
    { value: 1e22, expected: '10 Z' },
    { value: 1e21, expected: '1 Z' },
    { value: 1e20, expected: '100 E' },
    { value: 1e19, expected: '10 E' },
    { value: 1e18, expected: '1 E' },
    { value: 1e17, expected: '100 P' },
    { value: 1e16, expected: '10 P' },
    { value: 1e15, expected: '1 P' },
    { value: 1e14, expected: '100 T' },
    { value: 1e13, expected: '10 T' },
    { value: 1e12, expected: '1 T' },
    { value: 1e11, expected: '100 G' },
    { value: 1e10, expected: '10 G' },
    { value: 1e9, expected: '1 G' },
    { value: 1e8, expected: '100 M' },
    { value: 1e7, expected: '10 M' },
    { value: 1e6, expected: '1 M' },
    { value: 1e5, expected: '100 k' },
    { value: 1e4, expected: '10 k' },
    { value: 1e3, expected: '1 k' },
    { value: 1e2, expected: '100 ' },
    { value: 1e1, expected: '10 ' },
    { value: 1, expected: '1 ' },
    { value: 0, expected: '0 ' },
    { value: 1e-1, expected: '100 m' },
    { value: 1e-2, expected: '10 m' },
    { value: 1e-3, expected: '1 m' },
    { value: 1e-4, expected: '100 μ' },
    { value: 1e-5, expected: '10 μ' },
    { value: 1e-6, expected: '1 μ' },
    { value: 1e-7, expected: '100 n' },
    { value: 1e-8, expected: '10 n' },
    { value: 1e-9, expected: '1 n' },
    { value: 1e-10, expected: '100 p' },
    { value: 1e-11, expected: '10 p' },
    { value: 1e-12, expected: '1 p' },
    { value: 1e-13, expected: '100 f' },
    { value: 1e-14, expected: '10 f' },
    { value: 1e-15, expected: '1 f' },
    { value: 1e-16, expected: '100 a' },
    { value: 1e-17, expected: '10 a' },
    { value: 1e-18, expected: '1 a' },

    { value: 1001e-15, expected: '1 p' },
    { value: 1010e-15, expected: '1.01 p' },
    { value: 1100e-15, expected: '1.10 p' },
    { value: 1101e-15, expected: '1.10 p' },
    { value: 1110e-15, expected: '1.11 p' },
    { value: 1111e-15, expected: '1.11 p' },
    { value: 5005e-15, expected: '5 p' },
    { value: 5050e-15, expected: '5.05 p' },
    { value: 5500e-15, expected: '5.50 p' },
    { value: 5505e-15, expected: '5.50 p' },
    { value: 5550e-15, expected: '5.55 p' },
    { value: 5555e-15, expected: '5.55 p' },
    { value: 5556e-15, expected: '5.56 p' },
    { value: 9009e-15, expected: '9.01 p' },
    { value: 9090e-15, expected: '9.09 p' },
    { value: 9900e-15, expected: '9.90 p' },
    { value: 9909e-15, expected: '9.91 p' },
    { value: 9990e-15, expected: '9.99 p' },
    { value: 9999e-15, expected: '10 p' },

    { value: 1001, expected: '1 k' },
    { value: 1010, expected: '1.01 k' },
    { value: 1100, expected: '1.10 k' },
    { value: 1101, expected: '1.10 k' },
    { value: 1110, expected: '1.11 k' },
    { value: 1111, expected: '1.11 k' },
    { value: 5005, expected: '5 k' },
    { value: 5050, expected: '5.05 k' },
    { value: 5500, expected: '5.50 k' },
    { value: 5505, expected: '5.50 k' },
    { value: 5550, expected: '5.55 k' },
    { value: 5555, expected: '5.55 k' },
    { value: 5556, expected: '5.56 k' },
    { value: 9009, expected: '9.01 k' },
    { value: 9090, expected: '9.09 k' },
    { value: 9900, expected: '9.90 k' },
    { value: 9909, expected: '9.91 k' },
    { value: 9990, expected: '9.99 k' },
    { value: 9999, expected: '10 k' },

    { value: 1001e9, expected: '1 T' },
    { value: 1010e9, expected: '1.01 T' },
    { value: 1100e9, expected: '1.10 T' },
    { value: 1101e9, expected: '1.10 T' },
    { value: 1110e9, expected: '1.11 T' },
    { value: 1111e9, expected: '1.11 T' },
    { value: 5005e9, expected: '5 T' },
    { value: 5050e9, expected: '5.05 T' },
    { value: 5500e9, expected: '5.50 T' },
    { value: 5505e9, expected: '5.50 T' },
    { value: 5550e9, expected: '5.55 T' },
    { value: 5555e9, expected: '5.55 T' },
    { value: 5556e9, expected: '5.56 T' },
    { value: 9009e9, expected: '9.01 T' },
    { value: 9090e9, expected: '9.09 T' },
    { value: 9900e9, expected: '9.90 T' },
    { value: 9909e9, expected: '9.91 T' },
    { value: 9990e9, expected: '9.99 T' },
    { value: 9999e9, expected: '10 T' },
  ];

  // Positive values
  convertData.forEach((data) => {
    const expected: string = data.expected.trim();

    const args: UnitServiceArgumentsModel = {
      value: data.value,
      fractionDigits: 2,
      unit: '',
    };

    it(`transform "${args.value}" to "${expected}"`, () => {
      const result = UnitUtil.convert(args);
      expect(result.valueWithUnit).toBe(expected);
    });
  });

  // Negative values
  convertData.forEach((data) => {
    if (data.value === 0) {
      return;
    }

    const expected: string = '-' + data.expected.trim();

    const args: UnitServiceArgumentsModel = {
      value: data.value * -1,
      fractionDigits: 2,
      unit: '',
    };

    it(`transform "${args.value}" to "${expected}"`, () => {
      const result = UnitUtil.convert(args);
      expect(result.valueWithUnit).toBe(expected);
    });
  });

  // Positive values with Ω unit symbol
  convertData.forEach((data) => {
    const expected: string = data.expected + 'Ω';

    const args: UnitServiceArgumentsModel = {
      value: data.value,
      fractionDigits: 2,
      unit: 'Ω',
    };

    it(`transform "${args.value} ${args.unit}" to "${expected}"`, () => {
      const result = UnitUtil.convert(args);
      expect(result.valueWithUnit).toBe(expected);
    });
  });
});
