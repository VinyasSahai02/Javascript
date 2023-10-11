//CLASS
class Product{    //behaves like the constuctor func
    constructor(itemName){
        this.itemName=itemName;
    }
    getItemName(){
        return this.itemName+'is a product'
    }
}
//let pencil =new Product('pencil');

const Product1 = class Product{    //making a class using a variable
    constructor(itemName,price,discount,productCode){
        this.itemName=itemName;
        this.price=price;
        this.discount=discount;
        this.productCode=productCode;
    }
    get getDiscountValue(){    //getter and setter
        return this.discount;
    }
    set setDiscountValue(value){
        this.discount=value;
    }
    discountValue(){    //method
        return this.discount*this.price/100
    }

};
//let chair=new Product1('chair',499,15,'c10');

class Furniture extends Product{    //extending a class
    constructor(itemName){
        super(itemName);   //calls the constructor of parent class ie. Product
    }
    getItemName(){
        return this.itemName+"is a furniture"
    }
}
let pencil=new Product('pencil');   //pencil is a product
let chair=new Furniture('chair');   //chair is a furniture