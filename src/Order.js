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
            const {category,price}=item
            let tax=null
            if(category==='Beer') tax=0.2
            if(category==='Cigar') tax=0.25
            if(category==='Eletronics') tax=0.3
            if(category==='Water') tax=0
            sum+=price*tax
        }
        return sum
    }
}