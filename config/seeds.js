var Bowtie = require('../models/bowtie');
var mongoose = require('mongoose');
var database = require('./database');

var bowties = [
  {
    id: 11,
    material: "silk",
    pattern: "houndstooth",
    style: "slim",
    image_url: "https://cdn.thetiebar.com/products/BL110_2.png",
    retail_price: 24.95,
    description: "This houndstooth bowtie is made from top quality silk."
  },
  {
    id: 12,
    material: "silk",
    pattern: "floral",
    style: "slim",
    image_url: "https://cdn.thetiebar.com/products/B1866_2.png",
    retail_price: 23.95,
    description: "This floral bowtie is made from top quality silk."
  },
  {
    id: 13,
    material: "silk",
    pattern: "paisley",
    style: "traditional",
    image_url: "https://cdn.thetiebar.com/products/B1960_2.png",
    retail_price: 26.95,
    description: "This paisley bowtie is made from top quality silk."
  },
  {
    id: 14,
    material: "wool",
    pattern: "plaid",
    style: "diamond tip",
    image_url: "https://cdn.thetiebar.com/products/B1894_2.png",
    retail_price: 29.95,
    description: "This plaid bowtie is made from top quality wool."
  },
  {
    id: 15,
    material: "cotton",
    pattern: "gingham",
    style: "traditional",
    image_url: "https://cdn.thetiebar.com/products/BC742_2.png",
    retail_price: 22.95,
    description: "This gingham bowtie is made from top quality cotton."
  },
  {
    id: 16,
    material: "wool",
    pattern: "plaid",
    style: "traditional",
    image_url: "https://cdn.thetiebar.com/products/B1082_l_2.png",
    retail_price: 29.95,
    description: "This plaid bowtie is made from top quality wool."
  },
  {
    id: 17,
    material: "cotton",
    pattern: "plaid",
    style: "slim",
    image_url: "https://cdn.thetiebar.com/products/B1082ST.jpg",
    retail_price: 22.95,
    description: "This plaid bowtie is made from top quality cotton."
  },
  {
    id: 18,
    material: "cotton",
    pattern: "striped",
    style: "diamond tip",
    image_url: "https://cdn.thetiebar.com/products/B1182_l_2.png",
    retail_price: 23.95,
    description: "This striped bowtie is made from top quality cotton."
  },
  {
    id: 19,
    material: "silk",
    pattern: "geometric",
    style: "slim",
    image_url: "https://cdn.thetiebar.com/products/B1873.jpg",
    retail_price: 28.95,
    description: "This geometric bowtie is made from top quality silk."
  },
  {
    id: 20,
    material: "silk",
    pattern: "plaid",
    style: "diamond tip",
    image_url: "https://cdn.thetiebar.com/products/BD339_l_2.png",
    retail_price: 34.95,
    description: "This plaid bowtie is made from top quality silk."
  }
]

Bowtie.remove({}, function(err) {
  if (err) console.log(err);
  Bowtie.create(bowties, function(err, bowties) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + bowties.length  + " bowties.");
      mongoose.connection.close();
    }
    process.exit();
  });
});
