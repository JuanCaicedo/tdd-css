var expect = require('chai').expect;
var quixote = require('quixote');

describe('Text with audio icon', function() {

  describe('one word', function() {
    var frame;

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/public/css/app.css'
      }, done);
    });

    after(function() {
      frame.remove();
    });

    beforeEach(function() {
      frame.reset();
      frame.add(`
      `);
    });

    it.skip('aligns text and icon side by side', function() {
    });

    describe('icon', function() {

      it.skip('has background image', function() {
      });

      it.skip('has a set width', function() {
      });

      it.skip('has a set height', function() {
      });

      it.skip('is centered within icon container', function() {
      });

      it.skip('is a set distance from text', function() {
      });

      it.skip('icon is to the right of audio container with padding', function() {
      });

    });

    it.skip('audio container is directly to the right of text', function() {
    });

  });

  describe('with other text, one line', function() {
    var frame;

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/public/css/app.css'
      }, done);
    });

    after(function() {
      frame.remove();
    });

    beforeEach(function() {
      frame.reset();
      frame.add(`
      `);
    });

    it.skip('keeps text and audio word on the same line', function() {
    });

  });

});
