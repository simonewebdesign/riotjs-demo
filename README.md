# Riotjs demo

Playing around with [Riotjs](https://muut.com/riotjs/).

## Getting started

I assume you are already familiar with node and npm.

These are just static files by the way, so you can serve them however you want.

E.g. using *simple-server*:

```
cd riotjs-demo

npm install simple-server -g

simple-server . 8080
# Simple-Server listening to http://localhost:8080/
```

### Compiling tags

You can compile tags using *riot*:

```
npm install riot -g

riot src dist
```

Or do it automatically by watching the src folder:

```
riot --w src dist
```

That's it. *Have fun!*
