const station_tablet = {
      styleComponent: "station_report_tablet.scss",
      header: {
          title: 'Station Report',
          classes: 'report-header-title'
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
               type: 'TwoColumn',
               title: 'SellOut Trend',
               height: '200px',
               components: [
                  {
                     type: 'Summary',
                     query: "defaultQuery",
                     title: 'Station Revenue'
                  },
                  {
                     type: 'Summary',
                     query: 'defaultQuery',
                     onLoad: 'stationOverviewOnLoad',
                     title: 'Market Share'
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
                  title: 'Revenue'
                }
             ]
        },
        {
               type: 'OneColumn',
               title: 'SellOut Trend',
               height:'400px',
               components: [
                  {
                     type: 'DataTable',
                     query: "defaultQuery",
                     dataFunction: 'getRevenueOrEarnings',
                     title: 'Program Performance'
                  }
              ]
        }
    ]
 };

export default station_tablet;
