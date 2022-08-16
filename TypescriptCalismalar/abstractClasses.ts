abstract class KrediBase {
    constructor(){

    }
    kaydet():void{
        console.log("Kaydedildi.")
    }

    abstract hesapla():void
}

class TuketiciKredi extends KrediBase{
    constructor(parameters) {
        super();
        
    }

    hesapla(): void {
        console.log("Tüketici kredisine göre hesaplama yapıldı.")
    }
}

class MortgageKredisi  extends KrediBase{
    constructor(parameters) {
        super();
        
    }

    hesapla(): void {
        console.log("Konut kredisine göre hesaplama yapıldı.")
    }

    baskaBirOperasyon(){

    }
}




