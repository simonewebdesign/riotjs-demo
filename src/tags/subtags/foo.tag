<foo>

  <h4>Foo!</h4>

  <strong class="foo-strong">{ bar } - { baz }</strong>

  <br>

  <em>{ two } + { five } = { two + five }</em>

  // access to the parent tag
  var parent = this.parent

  this.bar = parent.opts.foo.bar
  this.baz = parent.opts.foo.baz
  this.two = opts.numbers.two
  this.five = opts.numbers.five

</foo>
