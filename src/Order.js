import { Beer, Cigar, Eletronics } from "./Item"

export default class Order {
    constructor(){
        this.items=[]
    }
    addItem(item){
        this.items.push(item)
    }
    getTotal(){
        let sum=0
        for(let item of this.items) sum+=item.price
        return sum
    }
    getTaxes(){
        let sum=0
        for(let item of this.items){
            if(item instanceof Beer) sum+=item.getTax(0.2)
            if(item instanceof Cigar) sum+=item.getTax(0.25)
            if(item instanceof Eletronics) sum+=item.getTax(0.3)
        }
        return sum
    }
}