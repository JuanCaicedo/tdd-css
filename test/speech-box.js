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

  describe('with one line of text', function() {

    var container;
    var body;
    var speechBox;
    var text;

    beforeEach(function() {
      frame.reset();
      container = frame.add(
        `<div class="sd-speech-box">
           <div class="sd-speech-text">
              Some dialogue
           </div>
         </div>`
      );
      body = frame.get('body');
      speechBox = frame.get('.sd-speech-box');
      text = frame.get('.sd-speech-text');

    });

    it('centers text within box with padding', function() {
      var border = 1;
      text.assert({
        top: speechBox.top.plus(15 + border),
        right: speechBox.right.minus(30 + border),
        bottom: speechBox.bottom.minus(20 + border),
        left: speechBox.left.plus(30 + border)
      });
    });

  });

});
