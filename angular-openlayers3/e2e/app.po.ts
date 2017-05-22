import { browser, element, by } from 'protractor';

export class AngularOpenlayers3Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
