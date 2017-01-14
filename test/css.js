var expect = require('chai').expect;
var quixote = require('quixote');

describe('Text with audio', function() {

  var frame;
  var container;
  var text;
  var icon;

  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: '/base/src/client/screen.css'
    }, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();
    container = frame.add(
      `<span class='sd-audio'>
         <span class='sd-text-audio'>article.</span>
         <a href='#' class='sd-audio-start'>
           <span class='sd-audio-icon'>&nbsp;</span>
         </a>
       </span>`
    );
    text = frame.get('.sd-text-audio');
    icon = frame.get('.sd-audio-icon');
  });

  describe('audio icon', function() {

    it('aligns with text at the top', function() {
      icon.assert({
        top: text.top
      });
    });

    it('has styled text', function() {
      expect(icon.getRawStyle('background-image')).to.not.eql('none');
    });

    it('has a set width', function() {
      icon.assert({
        width: 14
      });
    });

  });

});
