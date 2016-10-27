namespace Ajax.Controllers {
    export class ProductsController {
        public product;

        constructor(TaxService) {
            this.product = [
                {
                name: `Milk`,
                price: 1.99,
                tax: TaxService.CalculateTax(1.99)
                },
                {
                    name: `Pasta`,
                    price: .99,
                    tax: TaxService.CalculateTax(.99)
                },
                {
                    name: `Steak`,
                    price: 6.99,
                    tax: TaxService.CalculateTax(6.99)
                }
            ]
        }

        //constructor($http: ng.IHttpService) {
        //    $http.get(`/api/products`).then((response) => {
        //        this.products = response.data;
        //    });
        //}
    }
    angular.module(`Ajax`).controller(`ProductsController`, ProductsController);
}


    