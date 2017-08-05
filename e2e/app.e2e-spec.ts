import { DirktestPage } from './app.po';

describe('dirktest App', () => {
  let page: DirktestPage;

  beforeEach(() => {
    page = new DirktestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
