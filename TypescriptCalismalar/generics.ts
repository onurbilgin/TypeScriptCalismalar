function deger(x:number):number{
    return x;
}

let sayi1 = deger(10)
console.log(sayi1)

function deger3<T>(x:T):T{
    return x;
}

let sayi3 = deger3<number>(2)
let sehir3 = deger3<string>("Ankara")
console.log(sayi3)
console.log(sehir3)

class GenericClass<T>{
    degisken:T;
    fonksiyon(parametre:T):T{
        return parametre;
    }
}

let sinif = new GenericClass<number>()
sinif.fonksiyon(2)