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
    container = frame.get('.sd-audio-start');
  });


  it('aligns with text at the top', function() {
    container.assert({
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
    const containerTop = container.getRawPosition().top;
    const containerBottom = container.getRawPosition().bottom;

    const topSpacing = iconTop - containerTop;
    const bottomSpacing = containerBottom - iconBottom;
    expect(topSpacing).to.eql(bottomSpacing);
  });

});
