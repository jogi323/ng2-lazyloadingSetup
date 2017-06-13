import { AngularCliSetupPage } from './app.po';

describe('angular-cli-setup App', () => {
  let page: AngularCliSetupPage;

  beforeEach(() => {
    page = new AngularCliSetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
