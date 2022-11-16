import Router from 'next/router';
import { render, screen } from 'src/utils/tests/testUtils';
import SearchPage from './search.page';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Search Page', () => {
  // setup a new mocking function for push method
  const pushMock = jest.fn();

  // mock a return value on useRouter
  // useRouter.mockReturnValue({
  //   query: {},
  //   // return mock for push method
  //   push: pushMock,
  //   // ... add the props or methods you need
  // });

  beforeEach(() => {
    // routerSpy = jest.spyOn(Router, 'push');
  });

  it('should render the search page', () => {
    render(<SearchPage />);
    expect(screen.getByTestId('searchPage')).toBeInTheDocument();
  });
});
