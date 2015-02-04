riot.tag('foo', '<h4>Foo!</h4> <strong class="foo-strong">{ bar } - { baz }</strong>', function(opts) {
  var parent = this.parent

  this.bar = parent.opts.foo.bar
  this.baz = parent.opts.foo.baz


});
