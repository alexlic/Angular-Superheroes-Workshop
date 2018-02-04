import { SuperheroesPage } from './app.po';

describe('superheroes App', () => {
  let page: SuperheroesPage;

  beforeEach(() => {
    page = new SuperheroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
