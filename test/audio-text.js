var expect = require('chai').expect;
var quixote = require('quixote');

describe('Text with audio icon', function() {

  describe('One word', function() {
    var frame;
    var container;
    var audioContainer;
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
      audioContainer = frame.get('.sd-audio-start');
    });


    it('aligns with text at the top', function() {
      audioContainer.assert({
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

    it('has a set height', function() {
      icon.assert({
        height: 14
      });
    });

    it('is centered within icon container', function() {
      const iconTop = icon.getRawPosition().top;
      const iconBottom = icon.getRawPosition().bottom;
      const containerTop = audioContainer.getRawPosition().top;
      const containerBottom = audioContainer.getRawPosition().bottom;

      const topSpacing = iconTop - containerTop;
      const bottomSpacing = containerBottom - iconBottom;
      expect(topSpacing).to.eql(bottomSpacing);
    });

    it('is spaced apart from text', function() {

      const textRight = text.getRawPosition().right;

      icon.assert({
        left: textRight + 8
      });

    });
  });

  describe('with other text, one line', function() {
    var frame;
    var container;
    var audio;
    var textContainer;
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
        `<div class='sd-text-container'>
           Other text
           <span class='sd-audio'>
             <span class='sd-text-audio'>article.</span>
             <a href='#' class='sd-audio-start'>
               <span class='sd-audio-icon'>&nbsp;</span>
             </a>
           </span>
         </div>`
      );
      audio = frame.get('.sd-text-audio');
      textContainer = frame.get('.sd-text-container');
    });

    it('keeps text and audio word on the same line', function() {
      audio.assert({
        top: textContainer.top
      });
    });

  });

});
