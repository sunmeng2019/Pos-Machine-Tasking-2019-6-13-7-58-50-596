var info = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]
items = ['0001', '0003', '0005', '0003']


console.log(createReceipt(items));

function creatReceipt(items){
    const countedItems=countedItems(items);
    const products=fillItems(countedItems);
    const total=caculateTotal(products);
    return generateReceipt(products,total);
}

function countedItems(items){
    let result=[]
    for(let i="0";i<=items.length;i++){
        let element=items[i];
        let exists=isExists(result,element);
        if(!exists){
            result.push({
                id:element
                count:1

            })
    
    } else {
    result[index].count++;
    }
    }
    return countedItems(items)
function isExists(result,element){
    for (let i="0";i<result.length;i++){
        if (result[i].id===element){
            return true
        }
    } 
    return false;

function fillItems(countedItems){
    let products = [];
    for(let i = 0;i<result.length;i++){
        for(let j=0;j<info.length;j++){
            if(result[i].id === info[j].id){
                products[i] = {
                    id:result[i].id,
                    count:result[i].count,
                    name:info[j].name,
                    price:info[j].price
                }
            }
        }
    }
    return products;
}

function caculateTotal(products){
    let total = 0;
    for(let k=0;k<products.length;k++){
        total += products[k].count * products[k].price;
    }
    return total
}

function generateReceipt(products,total){
let print = "Receipts\n------------------------------------------------------------"
    for(let k=0;k<products.length;k++){
        print+= "\n" + products[k].name +"\t\t\t\t\t"+ products[k].price +"\t\t\t"+ products[k].count;
    }
    print+="\n------------------------------------------------------------\nPrice: "+total;
    return print;
}
