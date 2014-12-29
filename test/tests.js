//Example test from QUnit FAQ
QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

//hat.js tests
QUnit.test("hat.js methods", function(assert) {
  assert.ok(DFAH.hat, "hat is defined");
});

