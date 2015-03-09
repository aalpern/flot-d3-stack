# Stream Graph Plugin for Flot

A plugin for Flot which utilizes
[d3's stack layout](https://github.com/mbostock/d3/wiki/Stack-Layout)
to provide [stream graphs](http://www.leebyron.com/else/streamgraph/).

### Usage

There's a single option to enable stream graphs on a series:

```json
series: {
    streamgraph: {
        show: true
    }
}
```
