import { parseFloatFixed } from './math.util';

describe('math.util', () => {
  it('should be use parseFloatFixed', () => {
    expect(parseFloatFixed(1, 0)).toEqual(1);
    expect(parseFloatFixed(1.0, 0)).toEqual(1);
    expect(parseFloatFixed(1.0, 0)).toEqual(1);

    expect(parseFloatFixed(1, 2)).toEqual(1);
    expect(parseFloatFixed(1.0, 2)).toEqual(1);
    expect(parseFloatFixed(1.0, 2)).toEqual(1);
    expect(parseFloatFixed(1.1, 2)).toEqual(1.1);
    expect(parseFloatFixed(1.01, 2)).toEqual(1.01);
    expect(parseFloatFixed(1.001, 2)).toEqual(1);

    expect(parseFloatFixed(1, 3)).toEqual(1);
    expect(parseFloatFixed(1.001, 3)).toEqual(1.001);

    expect(parseFloatFixed(1, 4)).toEqual(1);
    expect(parseFloatFixed(1.0001, 4)).toEqual(1.0001);
    expect(parseFloatFixed(1.00010001, 4)).toEqual(1.0001);

    expect(parseFloatFixed(1, 5)).toEqual(1);
    expect(parseFloatFixed(1.00001, 5)).toEqual(1.00001);
    expect(parseFloatFixed(1.0000100001, 5)).toEqual(1.00001);

    expect(parseFloatFixed(1, 10)).toEqual(1);
    expect(parseFloatFixed(1.0000000001, 10)).toEqual(1.0000000001);
    expect(parseFloatFixed(1.00000000010000001, 10)).toEqual(1.0000000001);

    expect(parseFloatFixed(9, 0)).toEqual(9);
    expect(parseFloatFixed(9.0, 0)).toEqual(9);
    expect(parseFloatFixed(9.0, 0)).toEqual(9);

    expect(parseFloatFixed(9, 2)).toEqual(9);
    expect(parseFloatFixed(9.0, 2)).toEqual(9);
    expect(parseFloatFixed(9.0, 2)).toEqual(9);
    expect(parseFloatFixed(9.9, 2)).toEqual(9.9);
    expect(parseFloatFixed(9.09, 2)).toEqual(9.09);
    expect(parseFloatFixed(9.009, 2)).toEqual(9.01);

    expect(parseFloatFixed(9.09, 1)).toEqual(9.1);
    expect(parseFloatFixed(9.009, 1)).toEqual(9);

    expect(parseFloatFixed(9, 3)).toEqual(9);
    expect(parseFloatFixed(9.009, 3)).toEqual(9.009);

    expect(parseFloatFixed(9, 4)).toEqual(9);
    expect(parseFloatFixed(9.0009, 4)).toEqual(9.0009);
    expect(parseFloatFixed(9.00090009, 4)).toEqual(9.0009);

    expect(parseFloatFixed(9, 5)).toEqual(9);
    expect(parseFloatFixed(9.00009, 5)).toEqual(9.00009);
    expect(parseFloatFixed(9.0000900009, 5)).toEqual(9.00009);

    expect(parseFloatFixed(9, 10)).toEqual(9);
    expect(parseFloatFixed(9.0000000009, 10)).toEqual(9.0000000009);
    expect(parseFloatFixed(9.000000000900009, 10)).toEqual(9.0000000009);
  });
});
