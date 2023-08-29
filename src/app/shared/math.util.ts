export function parseFloatFixed(value: number, digits: number): number {
  return parseFloat(value.toFixed(digits));
}

export function extractDigits(value: number): string {
  return value.toString().replace(/[^\d]/, '');
}

// Scientific notations

export const k = Math.pow(10, 3);
export const M = Math.pow(10, 6);
export const G = Math.pow(10, 9);
