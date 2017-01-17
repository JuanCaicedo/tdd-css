var expect = require('chai').expect;
var quixote = require('quixote');

describe('Accent box', function() {

  var frame;
  var container;
  var body;
  var box;
  var iconContainer;
  var textBox;

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
      `<div class="sd-accent-box">
         <div class="sd-accent-box-row">
           <div class="sd-accent-box-icon-container">
             <div class="sd-accent-box-icon">
             </div>
           </div>
           <div class="sd-accent-box-text">
             <h3>Did you know...</h3>
             <p>Body text</p>
           </div>
         </div>
       </div>`
    );
    body = frame.get('body');
    box = frame.get('.sd-accent-box');
    iconContainer = frame.get('.sd-accent-box-icon-container');
    textBox = frame.get('.sd-accent-box-text');

  });

  it('box takes up full width', function() {
    box.assert({
      width: body.width
    });
  });

  it('icon box and text box are next to each other', function() {
    iconContainer.assert({
      top: textBox.top,
      bottom: textBox.bottom
    });
  });

  it('icon box has set width', function() {
    iconContainer.assert({
      width: 70
    });
  });

  it('text box takes up remaining width', function() {
    var bodyWidth = body.width;
    textBox.assert({
      width: body.width.minus(70)
    });
  });

});
