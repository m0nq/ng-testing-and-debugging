import { UserListAppPage } from './app.po';

describe('User List App', () => {
  const userListAppPage = new UserListAppPage();

  beforeEach(() => {
    userListAppPage.navigateTo();
  });

  it('should have a title', () => {
    const title = userListAppPage.getTitle();

    expect(title).toBe('Users Online Now');
  });

  it('should have an unordered list', () => {
    const listElement = userListAppPage.getUnorderedList();

    expect(listElement).toBeTruthy();
  });

  it('should have 16 users in the default list', () => {
    const total = 16;
    const clearButton = userListAppPage.getClearButton();
    const users = userListAppPage.getUsers();

    clearButton.click();

    expect(users.count()).toBe(total);
  });
});
