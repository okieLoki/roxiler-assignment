const Product = require('../models/Product');
const monthMapper = require('../utils/month');

const getDataByMonth = async (req, res) => {
  try {
    let month = req.query.month

    if(!month){
        return res.status(400).json({
            message: 'Please provide a month'
        })
    }
    month = month.toLowerCase();

    const filteredProducts = await Product.find({
      $expr: { $eq: [{ $month: '$dateOfSale' }, monthMapper[month]] },
    });

    return res.status(200).json(filteredProducts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Error fetching data from API',
    });
  }
};

module.exports = getDataByMonth;
