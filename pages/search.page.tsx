import { useRouter } from 'next/router';

function SearchPage(): JSX.Element {
  const router = useRouter();
  // expect {baseUrl}/search?{queryTerm}={queryValue}
  // eg, {baseUrl}/search?make=mitsubishi&model=lancer => return {make: 'mitsubishi', model: 'lancer'}
  console.log(router?.query);
  const { make, model, searchTerm } = router?.query;
  const protectedMake = make ?? 'None';
  const protectedModel = model ?? 'None';
  const protectedSearchTerm = searchTerm ?? 'None';

  return (
    <div data-testid='searchPage'>
      search page
      <div>
        <p>make: {protectedMake}</p>
        <p>model: {protectedModel}</p>
        <p>searchTerm: {protectedSearchTerm}</p>
      </div>
    </div>
  );
}

export default SearchPage;
