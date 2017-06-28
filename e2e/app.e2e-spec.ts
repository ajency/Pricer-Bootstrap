import { PricerBootstrapPage } from './app.po';

describe('pricer-bootstrap App', () => {
  let page: PricerBootstrapPage;

  beforeEach(() => {
    page = new PricerBootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
