riot.tag('demo', '<h2>{ title }</h2> <ul> <li each="{ item, i in items }">{ item.title }</li> </ul> <form onsubmit="{ add }"> <input> <button>Add #{ items.length + 1 }</button> </form> <button onclick="{ changeTitle }">Change title to something else</button>', function(opts) {

  this.title = opts.title,
  this.items = opts.items

  this.add = function(e) {
    var newitem = e.target[0]
    console.log('add function triggered. newitem value: ' + newitem.value)
    this.items.push({title: newitem.value})
    newitem.value = ''
    console.log('items: ', this.items)
  }.bind(this);

  this.changeTitle = function(e) {
    this.title = 'something else'
  }.bind(this);


});