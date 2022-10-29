export interface IFieldHeading {
  title: string;
}

/**
 * A component that displays a heading for a field
 *
 * @param {string} title - Required - The title of the field
 *
 * @returns {JSX.Element} - The component
 *
 * @example <FieldHeading title="Field Heading" />
 *
 * @author Nathan O'Donnell
 * @date 2022-10-29
 * @version 1.0.0
 */
export function FieldHeading({ title }: IFieldHeading): JSX.Element {
  return (
    <p data-testid='fieldHeading' className='font-sans font-bold pb-1 text-xs'>
      {title}
    </p>
  );
}
