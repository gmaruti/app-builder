import axios from 'axios'
import appConfig from '../../appConfig'

const getRevenueOrEarnings = (data) => {
  return (data.station.revenue || data.station.earnings || {}).data || [];
};

async function showTooltip(tooltip) {
  if (!tooltip || !tooltip.label || !tooltip.label.attr) return '';
  const res = await axios.get(`${appConfig.serverURL}:8080/api/station/revenue/detail?month=${this.x}`);
  const detail = res.data;
  let tooltipStr = `Details for <b>${this.x}</b><br/><br/>`;
  detail.forEach((item) => {
    tooltipStr += `<span><b>${item.label}</b>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;${item.value1}&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;${item.value2}</span><br/>`;
  })
  setTimeout(function () {
        tooltip.label.attr({
            text:tooltipStr
      });
    }, 10)
  return '';
}

const stationOverviewOnLoad = () => {

  document.getElementById('val1').style.color = 'red';
  document.getElementById('val3').style.color = 'green';
  document.getElementById('val2').style.color = 'brown';
}

export {
  getRevenueOrEarnings,
  showTooltip,
  stationOverviewOnLoad
}
