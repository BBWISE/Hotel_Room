// INITIALIZING THE PRICES
var mayStudioPrice = 50
var mayApartmentPrice = 65
var juneStudioPrice = 75.20
var juneApartmentPrice = 68.70
var julyStudioPrice = 76
var julyApartmentPrice = 77

/*
 * The Function to solve the problem.
 * This function takes two parameters 'month' and 
 * 'numStays' and outputs the result in a
 * dictionary format.
 */
function price(month, numStays) {
    let finalPrice = { // Dictionary to store the calculated prices.
        "Apartment": 0,
        "Studio": 0
    }
        /*
          * This snipet checks for the vaule of 'month'
          * and returns the calculated result if its
          * condition is met for October or May and the
          * numbers of days.
          */
    if (month == 'October' || month == 'May') {
        if (numStays > 14) {

            let Sprice = mayStudioPrice * numStays;
            finalPrice.Studio = (Sprice) - (Sprice * (30 / 100));

            let Aprice = mayApartmentPrice * numStays;
            finalPrice.Apartment = (Aprice) - (Aprice * (10 / 100));

            return finalPrice;
        }
        else if (numStays >= 7) {
            let Sprice = mayStudioPrice * numStays;
            finalPrice.Studio = (Sprice) - ((Sprice) * (5 / 100));

            finalPrice.Apartment = mayApartmentPrice * numStays;
        }
        else {
            finalPrice.Apartment = mayStudioPrice * numStays;
            finalPrice.Apartment = mayApartmentPrice * numStays;
        }
        return finalPrice;
    }
        /*
         * This snipet checks for the vaule of 'month'
         * and returns the calculated result if its
         * condition is met for June or September and the
         * numbers of days.
         */
    else if (month == 'June' || month == 'September') {

        if (numStays > 14) {

            let Sprice = juneStudioPrice * numStays;
            finalPrice.Studio = (Sprice) - ((Sprice) * (20 / 100));

            let Aprice = juneApartmentPrice * numStays;
            finalPrice.Apartment = (Aprice) - ((Aprice) * (10 / 100));

        }
        else {
            finalPrice.Studio = juneStudioPrice * numStays;
            finalPrice.Apartment = juneApartmentPrice * numStays;
        }
        return finalPrice;
    }
    /*
         * This snipet checks for the vaule of 'month'
         * and returns the calculated result if its
         * condition is met for July or August and the
         * numbers of days.
         */
    else if (month == 'July' || month == 'August') {

        finalPrice.Studio = julyStudioPrice * numStays;

        if (numStays >= 14) {
            let Aprice = julyApartmentPrice * numStays;
            finalPrice.Apartment = (Aprice) - ((Aprice) * (10 / 100));
        }
        else {
            finalPrice.Apartment = julyApartmentPrice * numStays;
        }
        return finalPrice;

    }

}

// Testing the written function
console.log(price("May", 15));
console.log(price("June", 14));
console.log(price("August", 20));