const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
    getLength: function () {
        return Object.keys(this.guests).length;
    },
    getActualFreePlace: function () {
        return [this.quantityOfPlaces] - [this.guests.length];
    },
    paidByPlace: function () {
        return this.bankAccount += this.priceByPlace;
    },
    checkInGuest: function (firstName, lastName, moneyQuantity) {
        if (this.getLength() >= this.quantityOfPlaces) {
            return 'Sorry, we do not have free spaces';
        } else if (moneyQuantity < this.priceByPlace) {
            return 'Sorry, you do not have enough money';
        } else {
            this.paidByPlace();
            let client = {firstName, lastName, moneyQuantity: moneyQuantity - this.priceByPlace};
            this.guests = client;
            return client;
        }
    }
}

hotel.checkInGuest('Oleksii', 'Ustinov', 200);
console.log(hotel.bankAccount);
console.log(hotel.getLength());
console.log(hotel);
hotel.checkInGuest('John', 'Doe', 500);
console.log(hotel);