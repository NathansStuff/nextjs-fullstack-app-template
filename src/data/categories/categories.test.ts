import { CATEGORIES } from "./categories";

describe('CATEGORIES', () => {
  it('should return a list of categories', () => {
    expect(CATEGORIES).toHaveLength(8);
  });
});
