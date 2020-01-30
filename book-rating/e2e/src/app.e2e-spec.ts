import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Start Page', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Book Rating');
  });

});
