const Product = require('../models/Product');
const monthMapper = require('../utils/month');

const monthlySale = async (req, res) => {
    try {

        let month = req.query.month

        if(!month){
            return res.status(400).json({
                message: 'Please provide a month'
            })
        }
        month = month.toLowerCase();

        const products = await Product.find(
            {
                $expr: { $eq: [{ $month: '$dateOfSale' }, monthMapper[month]] }
            }
        )

        if (!products) {
            return res.status(404).json({
                message: 'No products found'
            })
        }

        let totalSale = 0, soldProductCount = 0, notSoldProductCount = 0

        products.forEach(product => {
            if (product.sold === true) {
                totalSale += product.price
                soldProductCount++
            }
            else {
                notSoldProductCount++
            }
        })

        return res.json({
            month: month,
            totalSale: totalSale,
            totolProductsSold: soldProductCount,
            totalProductsNotSold: notSoldProductCount
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Error fetching data from API'
        })
    }
}

const getBarChartData = async (req, res) => {
    try {
        let month = req.query.month;
        month = month.toLowerCase();

        const products = await Product.find({
            $expr: { $eq: [{ $month: '$dateOfSale' }, monthMapper[month]] },
        });

        const priceRanges = {
            '0-100': 0,
            '101-200': 0,
            '201-300': 0,
            '301-400': 0,
            '401-500': 0,
            '501-600': 0,
            '601-700': 0,
            '701-800': 0,
            '801-900': 0,
            '901-above': 0,
        };

        products.forEach((product) => {
            const price = product.price;

            switch (true) {
                case price <= 100:
                    priceRanges['0-100']++;
                    break;
                case price <= 200:
                    priceRanges['101-200']++;
                    break;
                case price <= 300:
                    priceRanges['201-300']++;
                    break;
                case price <= 400:
                    priceRanges['301-400']++;
                    break;
                case price <= 500:
                    priceRanges['401-500']++;
                    break;
                case price <= 600:
                    priceRanges['501-600']++;
                    break;
                case price <= 700:
                    priceRanges['601-700']++;
                    break;
                case price <= 800:
                    priceRanges['701-800']++;
                    break;
                case price <= 900:
                    priceRanges['801-900']++;
                    break;
                default:
                    priceRanges['901-above']++;
                    break;
            }
        });

        return res.status(200).json(priceRanges);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error fetching data from API',
        });
    }
}

const getPieChartData = async (req, res) => {
    try {
        let month = req.query.month;
        month = month.toLowerCase();

        const products = await Product.find({
            $expr: { $eq: [{ $month: '$dateOfSale' }, monthMapper[month]] },
        });

        const categoryCounts = {};

        products.forEach((product) => {
            const category = product.category;

            if (categoryCounts.hasOwnProperty(category)) {
                categoryCounts[category]++;
            } else {
                categoryCounts[category] = 1;
            }
        });
        
        return res.status(200).json(categoryCounts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error fetching data from API',
        });
    }
}



module.exports = { monthlySale, getBarChartData, getPieChartData };