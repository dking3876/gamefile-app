import { GamefileProtoPage } from './app.po';

describe('gamefile-proto App', function() {
  let page: GamefileProtoPage;

  beforeEach(() => {
    page = new GamefileProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
