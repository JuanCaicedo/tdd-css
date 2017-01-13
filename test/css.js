var assert = require("chai").assert;
var quixote = require("quixote");

describe("Button", function() {

  var frame;
  var container;
  var button;

  before(function(done) {
    frame = quixote.createFrame({
      stylesheet: "/base/src/client/screen.css"
    }, done);
  });

  after(function() {
    frame.remove();
  });

  beforeEach(function() {
    frame.reset();
    container = frame.add(
      "<div>" +
        "  <a id='button' class='button' href='#anything'>foo</a>" +
        "</div>"
    );
    button = frame.get("#button");
  });

  it("fills its container", function() {
    button.assert({
      width: container.width
    });
  });

  it("has styled text", function() {
    assert.equal(button.getRawStyle("text-align"), "center", "should be centered");
    assert.equal(button.getRawStyle("text-decoration"), "none", "should not be underlined");
    assert.equal(button.getRawStyle("text-transform"), "uppercase", "should be uppercase");
  });

});
