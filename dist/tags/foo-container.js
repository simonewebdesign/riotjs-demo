riot.tag('foo-container', '<h2>Foo container</h2> <em>{ title }</em> <h3>And this is the foo element:</h3> <foo numbers="{ numbers }"></foo>', function(opts) {

  this.title = opts.title
  this.numbers = opts.numbers


});