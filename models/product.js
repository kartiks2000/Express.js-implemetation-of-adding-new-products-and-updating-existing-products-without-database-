// This is just a Dummy model without a database, we would be using a variable to store data instead of a database. 
// The motive is just to clearly understand what a model is and how does it work we later will work with real databases like mysql and mangodb.


// We will implement a feature to delete a product when use user clicks on delete button.
// We will pass the product name as a parameter with the url in the request from whwere we could fetch it and then delete it.
// href="/del/<%= product.title %>'
// we will recieve this request as-: 
// route("/del/:name",(req,res,next)=>{
//   console.log(req.params.name);
// });
// Then we could parameter as fetch it as "req.params.name"
// We also implemented a "delit()" function in the model to delete the product


var products = [];

module.exports = class Product {
    constructor(t){
        this.title = t;
        this.id = t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }

    static delit(name){
        products = products.filter(function(p) {
            return p.title!=name;
        });
    }

    static savechanges(prods){
        products = [...prods];
    }
}

