import { browser, element, by } from 'protractor';

export class UserListAppPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getTitle() {
    const header = by.css('h2');
    return element(header).getText();
  }

  getUnorderedList() {
    const list = by.css('ul');
    return element(list).isPresent();
  }

  getClearButton() {
    const button = by.css('button');
    return element(button);
  }

  getUsers() {
    const item = by.css('li');
    return element.all(item);
  }
}
