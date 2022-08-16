class Ev {
    private _odaSayisi:number
    _pencereSayisi:number
    _kat:number
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this._odaSayisi = odaSayisi;
        this._pencereSayisi = pencereSayisi;
        this._kat = kat;
    }
    yemekYe(){
        console.log(this._kat + "Katlı Evde" + "Yemek Yenildi.")
    }

}

let ev = new Ev(3,4,5)
ev.yemekYe()

class Kisi{
    private _isim:string

    get isim():string{
        return "Sayın " + this._isim
    }

    set isim(ad:string){
        this._isim = ad
    }
    kaydet(){
        console.log("Kisi kaydedildi.")
    }

}

class Musteri extends Kisi{
    satisYap(){
        console.log("Satış Yapıldı.")
    }

}

class Personel extends Kisi{
    maasOde(){
        console.log("Maaş Ödendi")
    }
}

let musteri = new Musteri
musteri.isim = "Onur"
console.log(musteri.isim)
musteri.kaydet()
musteri.satisYap()

let personel = new Personel
personel.kaydet()
personel.maasOde()