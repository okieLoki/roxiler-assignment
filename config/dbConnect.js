const mongoose = require('mongoose')

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect(process.env.MONGO_CONNECTION_URL);
}

module.exports = main