# d3 Stacking Plugin for Flot

A plugin for Flot which utilizes
[d3's stack layout](https://github.com/mbostock/d3/wiki/Stack-Layout)
to provide [stream graphs](http://www.leebyron.com/else/streamgraph/).

### Usage

There's a single option to enable stream graphs on a series:

```javascript
series: {
    stackD3: {
        show: true,
        mode: 'wiggle' /* or 'silhouette', 'expand', or 'zero' */
    }
}
```

### Example

![](example/example.png)
