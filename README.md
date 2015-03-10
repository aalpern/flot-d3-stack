# d3 Stacking Plugin for Flot

A plugin for Flot which utilizes
[d3's stack layout](https://github.com/mbostock/d3/wiki/Stack-Layout)
to provide [stream graphs](http://www.leebyron.com/else/streamgraph/).

### Usage

There's a option to enable d3 stacking, and an `offset` parameter to control the stacking layout algorithm. Valid values are `wiggle`, `silhouette`, `expand`, and `zero`:

```javascript
series: {
    stackD3: {
        show: true,
        offset: 'wiggle'
    }
}
```

### Example

![](example/example.png)
