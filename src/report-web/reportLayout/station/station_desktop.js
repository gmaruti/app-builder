const station_desktop = {
      header: {
          title: 'Station Report'
      },

      rows: [
        {
             type: 'Custom',
             components: [
                {
                    component: 'Custom',
                }
             ]
        },
        {
               type: 'ThreeColumn',
               title: 'SellOut Trend',
               height: '200px',
               components: [
                  {
                     type: 'Summary',
                     query: "defaultQuery",
                     title: 'Station Revenue',
                  },
                  {
                     type: 'Summary',
                     query: 'defaultQuery',
                     onLoad: 'stationOverviewOnLoad',
                     title: 'Market Share',
                  },
                  {
                     type: 'Summary',
                     query: 'defaultQuery',
                     title: 'Market Revenue',
                  }
              ]
        },
        {
             type: 'OneColumn',
             title: 'Revenue Trend',
             components: [
                {
                    type: 'LineGraph',
                    query: 'station_revenue',
                    dataFunction: 'getRevenueOrEarnings',
                    title: 'Revenue',
                    autoRefresh: {
                      query: 'station_revenue_subscript'
                    }
                },
                {
                    type: 'Header',
                    component: 'StationLineToggle',
                    query: 'station_earning'
                }

             ]
        },
        {
               type: 'TwoColumn',
               title: 'SellOut Trend',
               height:'400px',
               components: [
                  {
                     type: 'DataTable',
                     query: "defaultQuery",
                     title: 'Program Performance'
                  },
                  {
                     type: 'HeatMap',
                     query: 'defaultQuery'
                  }
              ]
        },
        {
               type: 'Composite',
               title: 'SellOut Trend',
               height: '410px',
               components: [
                  {
                     type: 'BarGraph',
                     query: "defaultQuery",
                     dataFunction: 'getRevenueOrEarnings'
                  },
                  {
                     type: 'Custom',
                     component: 'Seperator'
                  },
                  {
                     type: 'LineGraph',
                     query: 'defaultQuery',
                     tooltip: 'showTooltip',
                     dataFunction: 'getRevenueOrEarnings',
                  }
              ]
        }
    ]
 };

export default station_desktop;
