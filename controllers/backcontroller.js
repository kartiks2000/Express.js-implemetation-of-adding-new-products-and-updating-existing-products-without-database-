// Importing model and saving data in the model.

const productmodel = require('../models/product'); 

const adding = (req,res,next)=>{
    // Instansiating Models's class
    const newproduct = new productmodel(req.body.proname);
    // saving new product
    newproduct.save();
    // productsname.push(req.body.proname);
    res.redirect('/products');
}

const deleting = (req,res,next)=>{
    productmodel.delit(req.params.name); 
    res.redirect('/products');   
}


var allproducts;
var pro;

const editing = (req,res,next)=>{
    // console.log(req.params.myid); 
    allproducts = productmodel.fetchAll();
    pro = allproducts.filter(function(p) {
        return p.id == req.params.myid;
    });
    res.render('edit',{'pro':pro[0]});  
}

const saving = (req,res,next) => {
    allproducts = productmodel.fetchAll();
    allproducts.map((p)=>{
        if(p.id == pro[0].id){
            p.title = req.body.editedname;
        }
    });
    console.log(allproducts);
    productmodel.savechanges(allproducts);
    res.redirect('/products');
}

module.exports = {
    'adding':adding,
    'deleting':deleting,
    'editing':editing,
    'saving':saving,
}
