export interface IBaseTemplate {
  sampleTextProp: string;
}

export function BaseTemplate({ sampleTextProp }: IBaseTemplate): JSX.Element {
  return (
    <div data-testid="baseTemplate">
      <h1>{sampleTextProp}</h1>
    </div>
  );
}
