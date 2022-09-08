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
    paidPerPlace: function () {
        return this.bankAccount + this.priceByPlace;
    },
    addAGuest:function (firstName, lastName, moneyQuantity) {
        const guestList = this.getLength(firstName, lastName, moneyQuantity);
        moneyQuantity = moneyQuantity - this.priceByPlace;},
    checkInGuest: function (firstName, lastName, moneyQuantity) {
        if (this.guests.length >= this.quantityOfPlaces) {
            return "Sorry, we do not have free spaces";
        } else if (moneyQuantity < this.priceByPlace) {
            return "Sorry, you do not have enough money"
        } else {
          this.addAGuest();
            }
        }
    }



