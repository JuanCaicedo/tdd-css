var expect = require('chai').expect;
var quixote = require('quixote');

describe('Accent box', function() {

  describe('on desktop', function() {

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

    describe('with one line of text', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('takes up full width', function() {
      });

      it.skip('aligns icon box and text box next to each other', function() {
      });

      it.skip('has an icon box with a set width', function() {
      });

      it.skip('has a text box that takes up remaining width', function() {
      });

      it.skip('centers text within box with padding', function() {
      });

      describe('icon', function() {

        it.skip('has background image', function() {
        });

        it.skip('has a set dimensions', function() {
        });

        it.skip('is vertically centered within container', function() {
        });

        it.skip('is horizontally centered within container', function() {
        });

      });

    });

    describe('with multiple lines of text', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('has only normal padding above first header', function() {
      });

      it.skip('maintains spacing after headers', function() {
      });

      it.skip('maintains spacing before headers', function() {
      });

      it.skip('has only normal padding below final header', function() {
      });

    });
  });

  describe('on mobile', function() {

    var frame;

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/public/css/app.css',
        width: 800,
        height: 736
      }, done);
    });

    after(function() {
      frame.remove();
    });

    describe('with one line of text', function() {

      beforeEach(function() {
        frame.reset();
        frame.add(`
        `);
      });

      it.skip('takes up full width', function() {
      });

      it.skip('has an icon box with a set width', function() {
      });

      it.skip('has a text box that takes up remaining width', function() {
      });

    });

  });

});
