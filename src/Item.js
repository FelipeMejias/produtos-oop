export class Item {
    constructor(description,price){
        this.description=description
        this.price=price
    }
}
export class TaxItem extends Item {
    constructor(description,price){
        super(description,price)
        this.tax=tax
    }
    calculateTax(tax=0){
        return this.price*tax
    }
}

export class Beer extends TaxItem{
    constructor(description,price){
        super(description,price)
    }
    getTax(tax){
        return this.calculateTax(tax)
    }
}

export class Cigar extends TaxItem{
    constructor(description,price){
        super(description,price)
    }
    getTax(tax){
        return this.calculateTax(tax)
    }
}
export class Eletronics extends TaxItem{
    constructor(description,price){
        super(description,price)
    }
    getTax(tax){
        return this.calculateTax(tax)
    }
}
export class Water extends Item {
    constructor(description,price){
        super(description,price)
    }
}
