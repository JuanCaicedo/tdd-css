var expect = require('chai').expect;
var quixote = require('quixote');

describe('Accent box', function() {

  var frame;

  after(function() {
    frame.remove();
  });

  describe('desktop', function() {

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/src/client/screen.css',
        width: 1024,
        height: 800
      }, done);
    });

    describe('with one line of text', function() {

      var container;
      var body;
      var box;
      var iconContainer;
      var textBox;
      var text;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-accent-box">
            <div class="sd-accent-box-row">
              <div class="sd-accent-box-icon-container">
                <div class="sd-accent-box-icon">
                </div>
              </div>
              <div class="sd-accent-box-text">
                <h3>Did you know...</h3>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        box = frame.get('.sd-accent-box');
        iconContainer = frame.get('.sd-accent-box-icon-container');
        textBox = frame.get('.sd-accent-box-text');
        text = frame.get('h3');

      });

      it('takes up full width', function() {
        box.assert({
          width: body.width
        });
      });

      it('aligns icon box and text box next to each other', function() {
        iconContainer.assert({
          top: textBox.top,
          bottom: textBox.bottom
        });
      });

      it('has an icon box with a set width', function() {
        iconContainer.assert({
          width: 70
        });
      });

      it('has a text box that takes up remaining width', function() {
        textBox.assert({
          width: body.width.minus(70)
        });
      });

      it('centers text within box with padding', function() {
        text.assert({
          top: textBox.top.plus(15),
          right: textBox.right.minus(15),
          bottom: textBox.bottom.minus(15),
          left: textBox.left.plus(15)
        });
      });

    });

    describe('with multiple lines of text', function() {

      var container;
      var body;
      var box;
      var iconContainer;
      var textBox;
      var h1;
      var h3;
      var div;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-accent-box">
            <div class="sd-accent-box-row">
              <div class="sd-accent-box-icon-container">
                <div class="sd-accent-box-icon">
                </div>
              </div>
              <div class="sd-accent-box-text">
                <h3>Did you know...</h3>
                <div class="other">Other text</div>
                <h1>Last header</h1>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        box = frame.get('.sd-accent-box');
        iconContainer = frame.get('.sd-accent-box-icon-container');
        textBox = frame.get('.sd-accent-box-text');
        h1 = frame.get('h1');
        h3 = frame.get('h3');
        div = frame.get('.other');

      });

      it('maintains spacing after headers', function() {
        div.assert({
          top: h3.bottom.plus(18.720)
        });
      });

    });
  });

  describe('mobile', function() {

    before(function(done) {
      frame = quixote.createFrame({
        stylesheet: '/base/src/client/screen.css',
        width: 800,
        height: 736
      }, done);
    });

    describe('with one line of text', function() {

      var container;
      var body;
      var box;
      var iconContainer;
      var textBox;
      var text;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-accent-box">
            <div class="sd-accent-box-row">
              <div class="sd-accent-box-icon-container">
                <div class="sd-accent-box-icon">
                </div>
              </div>
              <div class="sd-accent-box-text">
                <h3>Did you know...</h3>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        box = frame.get('.sd-accent-box');
        iconContainer = frame.get('.sd-accent-box-icon-container');
        textBox = frame.get('.sd-accent-box-text');
        text = frame.get('h3');

      });

      it('takes up full width', function() {
        box.assert({
          width: body.width
        });
      });

      it('has an icon box with a set width', function() {
        iconContainer.assert({
          width: 50
        });
      });

      it('has a text box that takes up remaining width', function() {
        textBox.assert({
          width: body.width.minus(50)
        });
      });

    });
  });

});
