import { EcgpPage } from './app.po';

describe('ecgp App', () => {
  let page: EcgpPage;

  beforeEach(() => {
    page = new EcgpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
