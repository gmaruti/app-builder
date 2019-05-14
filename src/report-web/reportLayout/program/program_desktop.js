const program_desktop = {
      header: {
          title: 'Program Report'
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
                     title: 'Program Revenue',
                  },
                  {
                     type: 'Summary',
                     query: 'defaultQuery',
                     onLoad: 'stationOverviewOnLoad',
                     title: 'Share',
                  },
                  {
                     type: 'Summary',
                     query: 'defaultQuery',
                     title: 'Sellout',
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
                    tooltip: 'showTooltip',
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
             type: 'OneColumn',
             components: [
                {
                    type: 'Empty',
                     query: "defaultQuery",
                }
             ]
        },
        {
               type: 'Composite',
               title: 'SellOut Trend',
               height: '400px',
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
                     dataFunction: 'getRevenueOrEarnings',
                  }
              ]
        }
    ]
 };

export default program_desktop;
