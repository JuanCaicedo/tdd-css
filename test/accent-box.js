var expect = require('chai').expect;
var quixote = require('quixote');

describe('Accent box', function() {

  var frame;
  var container;
  var body;
  var box;
  var iconContainer;
  var text;

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
    text = frame.get('.sd-accent-box-text');

  });

  it('takes up full width', function() {
    box.assert({
      width: body.width
    });
  });

  it('icon box and text box are next to each other', function() {
    iconContainer.assert({
      top: text.top,
      bottom: text.bottom
    });
  });

});
