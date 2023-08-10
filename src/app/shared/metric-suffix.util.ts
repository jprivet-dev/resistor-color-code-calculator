import {
  MetricSuffixList,
  MetricSuffixModel,
  MetricSuffixServiceArgumentsModel,
  MetricSuffixServiceResultModel,
} from './metric-suffix.model';

export abstract class MetricSuffixUtil {
  static metricSuffixList: MetricSuffixModel[] = MetricSuffixList;

  static base10(value: number): number {
    let base10: number = 0;

    for (let i = 0; i < this.metricSuffixList.length; i++) {
      const currentBase10 = this.metricSuffixList[i].base10;
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

  static metricSuffix(value: number): MetricSuffixModel | undefined {
    const base10 = this.base10(value);
    return this.metricSuffixList.find(
      (mp: MetricSuffixModel) => mp.base10 === base10,
    );
  }

  static positiveValue(value: number): number {
    return value < 0 ? value * -1 : value;
  }

  static isNegative(value: number): boolean {
    return value < 0;
  }

  static convert(
    args: MetricSuffixServiceArgumentsModel,
  ): MetricSuffixServiceResultModel {
    let valueWithoutMetricSuffix: string = '';
    const metricSuffix: MetricSuffixModel | undefined = this.metricSuffix(
      this.positiveValue(args.value),
    );

    if (metricSuffix) {
      const value =
        this.positiveValue(args.value) / Math.pow(10, metricSuffix.base10);
      valueWithoutMetricSuffix = this.toFixedOnlyIfNecessary(
        value,
        args.fractionDigits,
      );
    } else {
      valueWithoutMetricSuffix = this.toFixedOnlyIfNecessary(
        this.positiveValue(args.value),
        2,
      );
    }

    if (this.isNegative(args.value)) {
      valueWithoutMetricSuffix = '-' + valueWithoutMetricSuffix;
    }

    let valueWithMetricSuffix: string = valueWithoutMetricSuffix;

    if (metricSuffix?.symbol || args.unit) {
      valueWithMetricSuffix += ' ';
    }

    if (metricSuffix) {
      valueWithMetricSuffix += metricSuffix.symbol;
    }

    valueWithMetricSuffix += args.unit;

    return {
      value: args.value,
      fractionDigits: args.fractionDigits,
      unit: args.unit,
      valueWithoutMetricSuffix,
      valueWithMetricSuffix,
    };
  }
}
