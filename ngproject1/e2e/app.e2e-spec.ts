import { Ngproject1Page } from './app.po';

describe('ngproject1 App', () => {
  let page: Ngproject1Page;

  beforeEach(() => {
    page = new Ngproject1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
