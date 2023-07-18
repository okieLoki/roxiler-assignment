const axios = require('axios');

const combinedStatsController = async (req, res) => {
  try {
    let month = req.query.month;

    if (!month) {
      return res.status(400).json({
        message: 'Please provide a month'
      });
    }

    const PORT = process.env.PORT || 8000;
    const BASE_URL = process.env.BASE_URL || 'http://localhost';

    const salesDataResponse = await axios.get(`${BASE_URL}:${PORT}/api/getStats/sale?month=${month}`);
    const barChartDataResponse = await axios.get(`${BASE_URL}:${PORT}/api/getStats/barchart?month=${month}`);
    const pieChartDataResponse = await axios.get(`${BASE_URL}:${PORT}/api/getStats/piechart?month=${month}`);

    const salesData = salesDataResponse.data;
    const barChartData = barChartDataResponse.data;
    const pieChartData = pieChartDataResponse.data;

    return res.status(200).json({
      salesData: salesData,
      barChartData: barChartData,
      pieChartData: pieChartData
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error fetching data from API'
    });
  }
};

module.exports = combinedStatsController;
