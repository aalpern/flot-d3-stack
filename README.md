# d3 Stacking Plugin for Flot

A plugin for Flot which utilizes
[d3's stack layout](https://github.com/d3/d3-shape#stacks)
to provide [stream graphs](http://www.leebyron.com/else/streamgraph/).

### Usage

There's a option to enable d3 stacking, and an `offset` parameter to
control the stacking layout algorithm. Valid values are `wiggle`,
`silhouette`, `expand`, and `diverging`. Any other value (e.g. `none`
or an empty value) will result in a regular stack:

```javascript
series: {
    stackD3: {
        show: true,
        offset: 'wiggle'
    }
}
```

### Installation via `npm`

This package is [available on npm](https://www.npmjs.com/package/flot-d3-stack) as `flot-d3-stack`. To install from npm:

```
npm install flot-d3-stack
```

### Example

![](example/example.png)

* flot-d3-stack is also in use in [Tessera](https://github.com/urbanairship/tessera).

## Release Notes


### 2.0

* Release 2.0 has been re-written to work with the new `d3-stack`
  module from D3 4.0, and is incompatible with D3 3.0.
* This version has been tested with Flot 0.8.3. Any changes necessary
  for newer versions of Flot will be made in an upcoming release.
