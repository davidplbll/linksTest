import * as fromUrlUser from './url-user.actions';

describe('loadUrlUsers', () => {
  it('should return an action', () => {
    expect(fromUrlUser.loadUrlUser().type).toBe('[UrlUser] Load UrlUsers');
  });
});
