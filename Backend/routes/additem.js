const express = require("express");
const Product = require("../models/additemschema");


const router = express.Router();

router.get("/", async (req, res ,next)=>{
   let product;
   try{
     product= await Product.find();
   } catch(err){
        console.log(err);
        return next(err);
   }
   res.status(201).json({product});
});

router.post("/", async (req, res, next) => {

    const {
      productname,
      supplier,
      productgroup,
      brand,
      productdescription,
      weights,
      tags,
      initialstock,
      initialstocklocation,
      purchaseprice,
      saleprice,
      wholesaleprice,
      retailprice,
    } = req.body;

   
    const createdProuduct = new Product({
      productname,
      supplier,
      productgroup,
      brand,
      productdescription,
      weights,
      tags,
      initialstock,
      initialstocklocation,
      purchaseprice,
      saleprice,
      wholesaleprice,
      retailprice,
    });


    try {
      await createdProuduct.save();
    } catch (err) {
      console.log(err);
      return next(err);
    }
   
    res.status(201).json("Data saved");

});





module.exports = router;