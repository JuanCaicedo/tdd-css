var expect = require('chai').expect;
var quixote = require('quixote');

describe('Speech box', function() {

  describe('desktop', function() {

    var frame;

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/public/css/app.css',
        width: 1024,
        height: 800
      }, done);
    });

    after(function() {
      frame.remove();
    });

    describe('two words', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('centers text within box with padding', function() {
      });

      it.skip('should only extend the box as far as the text', function() {
      });

    });

    describe('two speech boxes', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('has vertical space between boxes', function() {
      });

    });

    describe('long enough to wrap', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });


      it.skip('extends full width with padding', function() {
      });

    });
  });

  describe('mobile', function() {

    var frame;

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/public/css/app.css',
        width: 800,
        height: 700
      }, done);
    });

    after(function() {
      frame.remove();
    });

    describe('two words', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('should only extend the box as far as the text', function() {
      });

    });

    describe('long enough to wrap', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('extends full width', function() {
      });
    });

    describe('two speech boxes', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('has vertical space between boxes', function() {
      });

    });
  });
});
