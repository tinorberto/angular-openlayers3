import { AngularOpenlayers3Page } from './app.po';

describe('angular-openlayers3 App', function() {
  let page: AngularOpenlayers3Page;

  beforeEach(() => {
    page = new AngularOpenlayers3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
