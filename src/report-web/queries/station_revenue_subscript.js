const station_revenue_subscript = `
  subscription {
    newData {
         revenue {
          data {
            date
            value
          }
        }
    }
  }
`;

export default station_revenue_subscript;
