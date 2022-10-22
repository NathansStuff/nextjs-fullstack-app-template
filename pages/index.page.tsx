import { BaseTemplate } from "@components/templates";

export default function Home(): JSX.Element {
  return (
    <div data-testid='homepage'>
      <BaseTemplate sampleTextProp='' />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
