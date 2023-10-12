import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ConvertService {
    usd:string = "";
    jpy:string = "";
    rate:number = 110;

    usdToJpy() {
        if(this.usd === "")
            this.jpy = "";
        else
            this.jpy = (Number(this.usd) * this.rate).toString();
    }

    jpyToUsd() {
        if(this.jpy === "")
            this.usd = "";
        else
            this.usd = (Number(this.jpy) / this.rate).toString();
    }
}