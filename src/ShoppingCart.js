
class ShoppingCart {
    constructor() {
        this.items = []
        
    }
   
    
    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        const addedItems = {
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        }
        return this.items.push(addedItems)
    }

    clear() {
         this.items = []
    }

    total() {
        const totalSums = this.items.reduce(function(accumulator, Item) {
            return accumulator + Item.pricePerUnit * Item.quantity
        }, 0)
        return totalSums
    }
    
}

module.exports = ShoppingCart