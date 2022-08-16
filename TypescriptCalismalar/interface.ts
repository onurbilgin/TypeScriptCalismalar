interface Product{
    id:number
    name:string
    unitPrice:number

}

class Product2{
    id:number
    name:string
    unitPrice:number
}

function save(product:Product){
    console.log(product.name + " Kaydedildi!")
}

function save2(product2:Product2){
    console.log(product2.name + " Kaydedildi!")
}

save ({id:1, name:"Laptop", unitPrice:10})

let mouse = new Product2
mouse.name = "Atech"

save2(mouse)

interface personService{
    save();
}

class CustomerService implements personService {
    save() {
        
    }
}