export const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
    getLength: function () {
        return Object.keys(this.guests).length;
    },
    getActualFreePlace: function () {
        return this.quantityOfPlaces - this.getLength();
    },
    paidByPlace: function () {
        return this.bankAccount + this.priceByPlace;
    },
    checkInGuest: function (firstName, lastName, moneyQuantity) {
        if (this.getLength() >= this.quantityOfPlaces) {
            return 'Sorry, we do not have free spaces';
        } else if (moneyQuantity < this.priceByPlace) {
            return 'Sorry, you do not have enough money';
        } else {
            this.paidByPlace();
        }
    }
};

console.log(hotel.checkInGuest());
console.log(hotel.bankAccount);