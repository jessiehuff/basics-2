import { Basics2Page } from './app.po';

describe('basics-2 App', function() {
  let page: Basics2Page;

  beforeEach(() => {
    page = new Basics2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
