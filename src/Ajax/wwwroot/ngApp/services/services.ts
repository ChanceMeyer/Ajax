namespace Ajax.Services {
    export class TaxService {
        CalculateTax(price) {
            return price * .08;
        }
    }
    angular.module(`Ajax`).service(`TaxService`, TaxService);
}