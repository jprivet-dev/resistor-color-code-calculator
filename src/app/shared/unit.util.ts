import {
  Unit,
  UnitList,
  UnitServiceArguments,
  UnitServiceResult,
} from './unit.model';

export abstract class UnitUtil {
  static unitList: Unit[] = UnitList;

  static base10(value: number): number {
    let base10 = 0;

    for (let i = 0; i < this.unitList.length; i++) {
      const currentBase10 = this.unitList[i].base10;
      if (value >= Math.pow(10, currentBase10)) {
        base10 = currentBase10;
        break;
      }
    }

    return base10;
  }

  static toFixedOnlyIfNecessary(value: number, fractionDigits: number): string {
    const valueRound: number = Math.round(value);
    const valueToFixed2: string = value.toFixed(fractionDigits);

    return valueRound === Number(valueToFixed2)
      ? valueRound.toString()
      : valueToFixed2;
  }

  static unit(value: number): Unit | undefined {
    const base10 = this.base10(value);
    return this.unitList.find((mp: Unit) => mp.base10 === base10);
  }

  static positiveValue(value: number): number {
    return value < 0 ? value * -1 : value;
  }

  static isNegative(value: number): boolean {
    return value < 0;
  }

  static convert(args: UnitServiceArguments): UnitServiceResult {
    let valueWithoutUnit = '';
    const unit: Unit | undefined = this.unit(this.positiveValue(args.value));

    if (unit) {
      const value = this.positiveValue(args.value) / Math.pow(10, unit.base10);
      valueWithoutUnit = this.toFixedOnlyIfNecessary(
        value,
        args.fractionDigits,
      );
    } else {
      valueWithoutUnit = this.toFixedOnlyIfNecessary(
        this.positiveValue(args.value),
        2,
      );
    }

    if (this.isNegative(args.value)) {
      valueWithoutUnit = '-' + valueWithoutUnit;
    }

    let valueWithUnit: string = valueWithoutUnit;

    if (unit?.symbol || args.unit) {
      valueWithUnit += ' ';
    }

    if (unit) {
      valueWithUnit += unit.symbol;
    }

    valueWithUnit += args.unit;

    return {
      value: args.value,
      fractionDigits: args.fractionDigits,
      unit: args.unit,
      valueWithoutUnit,
      valueWithUnit,
    };
  }
}
