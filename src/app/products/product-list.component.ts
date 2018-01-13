import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class productListComponent {
    pageTitle: string ='Product List';
    products: any = [
        {
            "productId":2,
            "productName":"Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18 2016",
            "description": "15 Gallon capacity rolling",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://www.homedepot.com/p/BEHR-Premium-Plus-1-gal-Ultra-Pure-White-Semi-Gloss-Enamel-Zero-VOC-Interior-Paint-and-Primer-in-One-305001/202761530"
        },
        {
            "productId":5,
            "productName":"Hammer",
            "productCode": "TBX-0023",
            "releaseDate": "March 21 2016",
            "description": "Curved Steel Hammer",
            "price": 8.99,
            "starRating": 4.8,
            "imageUrl": "https://www.homedepot.com/p/DEWALT-20-oz-Hammer-DWHT51054/205594063"
        }];
}