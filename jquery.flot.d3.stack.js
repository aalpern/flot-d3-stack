(function ($) {
  var options = {
    series: {
      stackD3: {
        show: false
      }
    }
  }

  function getOffset(name) {
    switch(name) {
    case 'wiggle':
      return d3.stackOffsetWiggle
    case 'silhouette':
      return d3.stackOffsetSilhouette
    case 'diverging':
      return d3.stackOffsetDiverging
    case 'expand':
      return d3.stackOffsetExpand
    case 'stack':
    default:
      return d3.stackOffsetNone
    }
  }

  function getOrder(name) {
    switch(name) {
    case 'ascending':
      return d3.stackOrderAscending
    case 'descending':
      return d3.stackOrderDescending
    case 'insideout':
      return d3.stackOrderInsideOut
    case 'reverse':
      return d3.stackOrderReverse
    default:
      return d3.stackOrderNone
    }
  }
  
  function init(plot) {
    var stacked = null
    
    function processRawData(plot) {
      var options = plot.getOptions()      
      if (!options.series.stackD3 || (options.series.stackD3 && !options.series.stackD3.show))
        return
      
      if (!stacked) {
        var data = plot.getData()
        
        // Convert data to d3 4.0's expected tabular input format for
        // stack(). First grab the x values from the first series,
        // then iterate through all of them to get the data into
        // attributes.        
        var d3data = data[0].data.map((point) => {
          return { x: point[0] }
        })
        var keys = []
        data.forEach((series) => {
          keys.push(series.label)
          series.data.forEach((point, i) => {
            d3data[i][series.label] = point[1]
          })
        })

        // Compute the stacked values        
        var stack = d3.stack()
          .keys(keys)
          .offset(getOffset(options.series.stackD3.offset || 'wiggle'))
          .order(getOrder(options.series.stackD3.order))

        stacked = stack(d3data)
        // XXX: This probably doesn't work correctly with any of the
        // d3-stack ordering options other than 'none'
        stacked.forEach((s, i) => {
          data[i].d3stacked = s
        })
      }
    }

    function processDatapoints(plot, series, datapoints) {
      var options = plot.getOptions()      
      if (!options.series.stackD3 || (options.series.stackD3 && !options.series.stackD3.show))
        return

      console.log("processDatapoints", series, datapoints)
      
      var newpoints = []
      var percents = []
      series.data.forEach(function(point, i) {
        newpoints.push(point[0])
        newpoints.push(series.d3stacked[i][0])
        newpoints.push(series.d3stacked[i][1])
        percents.push(point.y)
      })
      if (options.series.stackD3.offset === 'expand')
        series.percents = percents
      datapoints.points = newpoints
    }
      
    plot.hooks.processRawData.push(processRawData)
    plot.hooks.processDatapoints.push(processDatapoints)
  }

  $.plot.plugins.push({
    init: init,
    options: options,
    name: 'stackD3',
    version: '1.0'
  })

})(jQuery);
