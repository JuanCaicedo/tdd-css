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

      var container;
      var body;
      var speechBox;
      var textContainer;
      var text;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-speech-container">
            <div class="sd-speech-box">
              <div class="sd-speech-text">
                <span>Some dialogue</span>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        speechBox = frame.get('.sd-speech-box');
        textContainer = frame.get('.sd-speech-text');
        text = frame.get('.sd-speech-text span');

      });

      it('centers text within box with padding', function() {
        var border = 1;
        textContainer.assert({
          top: speechBox.top.plus(15 + border),
          right: speechBox.right.minus(30 + border),
          bottom: speechBox.bottom.minus(20 + border),
          left: speechBox.left.plus(30 + border)
        });
      });

      it('should only extend the box as far as the text', function() {
        var border = 1;
        speechBox.assert({
          top: text.top.minus(15 + border),
          right: text.right.plus(30 + border),
          bottom: text.bottom.plus(20 + border),
          left: text.left.minus(30 + border)
        });
      });

    });

    describe('two speech boxes', function() {

      var container;
      var body;
      var one;
      var two;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div>
            <div class="sd-speech-container">
              <div id="one" class="sd-speech-box">
                <div class="sd-speech-text">
                  <span>Some dialogue</span>
                </div>
              </div>
            </div>
            <div class="sd-speech-container">
              <div id="two" class="sd-speech-box">
                <div class="sd-speech-text">
                  <span>Some dialogue</span>
                </div>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        one = frame.get('#one');
        two = frame.get('#two');

      });

      it('has vertical space between boxes', function() {
        two.assert({
          top: one.bottom.plus(10)
        });
      });

    });

    describe('long enough to wrap', function() {

      var container;
      var body;
      var speechContainer;
      var speechBox;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-speech-container">
            <div class="sd-speech-box">
              <div class="sd-speech-text">
                <span>
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                </span>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        speechContainer = frame.get('.sd-speech-container');
        speechBox = frame.get('.sd-speech-box');

      });


      it('extends full width with padding', function() {
        speechContainer.assert({
          left: body.left.plus(125),
          right: body.right.minus(175)
        });
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

      var container;
      var body;
      var speechBox;
      var textContainer;
      var text;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-speech-container">
            <div class="sd-speech-box">
              <div class="sd-speech-text">
                <span>Some dialogue</span>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        speechBox = frame.get('.sd-speech-box');
        textContainer = frame.get('.sd-speech-text');
        text = frame.get('.sd-speech-text span');

      });

      it('should only extend the box as far as the text', function() {
        var border = 1;
        speechBox.assert({
          top: text.top.minus(15 + border),
          right: text.right.plus(30 + border),
          bottom: text.bottom.plus(20 + border),
          left: text.left.minus(30 + border)
        });
      });

    });

    describe('long enough to wrap', function() {

      var container;
      var body;
      var speechContainer;
      var speechBox;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div class="sd-speech-container">
            <div class="sd-speech-box">
              <div class="sd-speech-text">
                <span>
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                  Some dialogue
                </span>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        speechContainer = frame.get('.sd-speech-container');
        speechBox = frame.get('.sd-speech-box');

      });

      it('extends full width', function() {
        speechContainer.assert({
          left: body.left,
          right: body.right
        });
      });
    });

    describe('two speech boxes', function() {

      var container;
      var body;
      var one;
      var two;

      beforeEach(function() {
        frame.reset();
        container = frame.add(
          `<div>
            <div class="sd-speech-container">
              <div id="one" class="sd-speech-box">
                <div class="sd-speech-text">
                  <span>Some dialogue</span>
                </div>
              </div>
            </div>
            <div class="sd-speech-container">
              <div id="two" class="sd-speech-box">
                <div class="sd-speech-text">
                  <span>Some dialogue</span>
                </div>
              </div>
            </div>
          </div>`
        );
        body = frame.get('body');
        one = frame.get('#one');
        two = frame.get('#two');

      });

      it('has vertical space between boxes', function() {
        two.assert({
          top: one.bottom.plus(10)
        });
      });

    });
  });
});
