<foo>

  <h4>Foo!</h4>

  <strong class="foo-strong">{ bar } - { baz }</strong>

  // access to the parent tag
  var parent = this.parent

  this.bar = parent.opts.foo.bar
  this.baz = parent.opts.foo.baz

</foo>
