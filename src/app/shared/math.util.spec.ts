import { parseFloatFixed } from './math.util';

describe('math.util', () => {
  const parseFloatFixedData: {
    value: number;
    digits: number;
    expected: number;
  }[] = [
    { value: 1, digits: 0, expected: 1 },
    { value: 1.0, digits: 0, expected: 1 },
    { value: 1.0, digits: 0, expected: 1 },

    { value: 1, digits: 2, expected: 1 },
    { value: 1.0, digits: 2, expected: 1 },
    { value: 1.1, digits: 2, expected: 1.1 },
    { value: 1.01, digits: 2, expected: 1.01 },
    { value: 1.001, digits: 2, expected: 1 },

    { value: 1, digits: 3, expected: 1 },
    { value: 1.001, digits: 3, expected: 1.001 },

    { value: 1, digits: 4, expected: 1 },
    { value: 1.0001, digits: 4, expected: 1.0001 },
    { value: 1.00010001, digits: 4, expected: 1.0001 },

    { value: 1, digits: 5, expected: 1 },
    { value: 1.00001, digits: 5, expected: 1.00001 },
    { value: 1.0000100001, digits: 5, expected: 1.00001 },

    { value: 1, digits: 10, expected: 1 },
    { value: 1.0000000001, digits: 10, expected: 1.0000000001 },
    { value: 1.00000000010000001, digits: 10, expected: 1.0000000001 },

    { value: 9, digits: 0, expected: 9 },
    { value: 9.0, digits: 0, expected: 9 },
    { value: 9.0, digits: 0, expected: 9 },

    { value: 9, digits: 2, expected: 9 },
    { value: 9.0, digits: 2, expected: 9 },
    { value: 9.9, digits: 2, expected: 9.9 },
    { value: 9.09, digits: 2, expected: 9.09 },
    { value: 9.009, digits: 2, expected: 9.01 },

    { value: 9, digits: 3, expected: 9 },
    { value: 9.009, digits: 3, expected: 9.009 },

    { value: 9, digits: 4, expected: 9 },
    { value: 9.0009, digits: 4, expected: 9.0009 },
    { value: 9.00090009, digits: 4, expected: 9.0009 },

    { value: 9, digits: 5, expected: 9 },
    { value: 9.00009, digits: 5, expected: 9.00009 },
    { value: 9.0000900009, digits: 5, expected: 9.00009 },

    { value: 9, digits: 10, expected: 9 },
    { value: 9.0000000009, digits: 10, expected: 9.0000000009 },
    { value: 9.000000000900009, digits: 10, expected: 9.0000000009 },
  ];

  describe('should be use parseFloatFixed', () => {
    parseFloatFixedData.forEach((data) => {
      it(`Expect ${data.expected} for value: ${data.value} and fractionDigits: ${data.digits}`, () => {
        expect(parseFloatFixed(data.value, data.digits)).toBe(data.expected);
      });
    });
  });
});
