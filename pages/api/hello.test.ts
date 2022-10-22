import { createMocks } from 'node-mocks-http';
import handler from './hello.page';

describe('validateData', () => {
  test('returns the expected static message', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        name: 'John Doe',
      })
    );
  });
});
