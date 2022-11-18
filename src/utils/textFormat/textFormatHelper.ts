/**
 * A helper function to return a formatted currency symbol.
 * @param {number | string | null | undefined} Value - Required - The value to format.
 * @param {boolean} decimals - Optional - Changes the return value to include decimals. Defaults to false.
 * @param {boolean} currencySymbol - Optional - Changes the return value to include currency symbol. Defaults to false.
 *
 * @returns {string} - Returns a string with formatted dollar sign, commas, and decimals.
 *
 * @example - textFormatHelper.currency(1234.56, true, true) // 'A $1,234.56'
 * @example - textFormatHelper.currency('1234.56') // '$1,234'
 *
 * @author - Nathan
 * @date - 18/11/2022
 * @version 1.0
 */
export function CurrencyFormatter(
  value: number | string | null | undefined,
  decimals = false,
  currencySymbol = false
): string {
  if (value === null || value === undefined) {
    return '$0.00';
  }

  const protectedValue = parseFloat(value.toString());

  // formatter takes a string and returns 'A $100,000' for example
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: decimals ? 2 : 0, // if decimals is true, show 2 decimal places, otherwise show 0
  });

  const formattedValue = formatter.format(protectedValue);

  // Remove the currency symbol. Note: this is not internationalised - if formatter currency option is changed, this will need to be updated
  const noPrefixValue = formattedValue.replace('A', '');

  return currencySymbol ? formattedValue : noPrefixValue;
}

/**
 * A helper function to trim a string - whitespace and excessive spaces.
 *
 * @param {string} value - Required - The value to trim.
 *
 * @returns {string} - Returns a trimmed string.
 *
 * @example - textFormatHelper.trim('  Hello    World  ') // 'Hello World'
 *
 * @author - Nathan
 * @date - 18/11/2022
 * @version 1.0
 */
export function trimClassname(className: string): string {
  return className.replace(/\s\s+/g, ' ').trim();
}
