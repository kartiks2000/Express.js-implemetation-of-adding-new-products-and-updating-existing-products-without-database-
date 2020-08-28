// Importing class and fetch data to display

const productmodel = require('../models/product');

exports.addproduct = (req,res,next)=>{
    res.render('addproduct');
}


exports.products = (req,res,next)=>{ 
    // Fetching data using model class by the static method defined in it by us
    const productsname = productmodel.fetchAll();
    // console.log(productsname);
    res.render('products',{'products':productsname});
}

exports.editing = (req,res,next)=>{ 
    // Fetching data using model class by the static method defined in it by us
    const productsname = productmodel.fetchAll();
    // console.log(productsname);
    res.render('products',{'products':productsname});
}

