'use strict';

describe('my app', function() {

  it('should have a title', function() {
    browser.get('http://localhost:8000/');
    expect(browser.getTitle()).toEqual('Angular Case-Study');
  });

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });

  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#!/view1');
    });

    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/<div class="leftDiv">/);
    });

    it('should find .json file', function() {
      expect($(item-data.json)).isPresent()).toBe(true);
    });
}

  });

  describe('directives', function() {

    beforeEach(function() {
      browser.get('index.html#!/view1');
    });

    it('should render directives/products when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/<div class="leftDiv">/);
    });

    it('should increase quantity when user clicks addSub', function() {
      element(by.id('button.addSub')).click();

      expect(element(by.binding('count')).getText()).
        toEqual('1');
    });

  });

});
