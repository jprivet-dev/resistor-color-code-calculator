export function calculateVolts(amps: number, resistance: number): number {
  return amps * resistance;
}

export function calculateAmps(volts: number, resistance: number): number {
  return volts / resistance;
}

export function calculateResistance(volts: number, amps: number): number {
  return volts / amps;
}

export function calculatePower(volts: number, amps: number): number {
  return volts * amps;
}
