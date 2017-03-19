import { AppNPage } from './app.po';

describe('app-n App', () => {
  let page: AppNPage;

  beforeEach(() => {
    page = new AppNPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
