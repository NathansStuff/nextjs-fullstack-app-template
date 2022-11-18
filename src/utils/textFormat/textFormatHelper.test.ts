import { CurrencyFormatter } from './textFormatHelper';

describe('CurrencyFormatter', () => {
  it('should return a formatted currency symbol', () => {
    expect(CurrencyFormatter(1234.56, true, true)).toBe('A$1,234.56');
  });
  it('should return a formatted currency symbol with decimals', () => {
    expect(CurrencyFormatter('1234.56', true)).toBe('$1,234.56');
  });
  it('should return $0.00 if value is null', () => {
    expect(CurrencyFormatter(null)).toBe('$0.00');
  });
  it('should return $0.00 if value is undefined', () => {
    expect(CurrencyFormatter(undefined)).toBe('$0.00');
  });
});
