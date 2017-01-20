var expect = require('chai').expect;
var quixote = require('quixote');

describe('Speech box', function() {

  var frame;

  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: '/base/src/client/screen.css'
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
        `<div class="sd-speech-box">
           <div class="sd-speech-text">
              <span>Some dialogue</span>
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

});
