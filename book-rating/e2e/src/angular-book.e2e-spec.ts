import { $, $$, browser, logging } from 'protractor';

describe('The awesome Angular book', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should have the right price', () => {
    browser.get('https://www.dpunkt.de/buecher/13231/9783864906466-angular.html');
    const price = $('.div_price').getText();
    expect(price).toContain('36,90 €');
  });

  it('should have the header', () => {
    browser.get('https://www.dpunkt.de/buecher/13231/9783864906466-angular.html');
    const header = $('.detail_title').getText();
    expect(header).toContain('Angular');
    expect(header).not.toContain('AngularJS');
  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
