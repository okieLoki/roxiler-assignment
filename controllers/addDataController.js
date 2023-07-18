const Product = require('../models/Product');
const axios = require('axios');

const addDataController = async (req, res) => {
  try {
    const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    const data = response.data;

    data.forEach(async (product) => {
      const existingProduct = await Product.findOne({ id: product.id });

      if (!existingProduct) {
        await Product.create(product);
      }
    })

    return res.status(200).json({
      message: 'Data added successfully',
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: 'Error fetching data from API',
    });
  }
};

module.exports = addDataController;
