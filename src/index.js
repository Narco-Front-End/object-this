export const hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
    getLength: () => {
        for (let key in hotel) {
            console.log(this.guests);
        }
    },
    getActualFreePlace: () => {
        console.log(hotel.quantityOfPlaces - this.getLength)
    },
    paidPerPlace: () => {
        return hotel.bankAccount + hotel.priceByPlace;
    },
    checkInGuest: (firstName, lastName, moneyQuantity) => {
        /*Если в отеле нет свободных мест, то ничего не меняет внутри
        объекта и возвращает строку 'Sorry, we have not free spaces'
         */
        if (this.getLength === 30) {
            return 'Sorry, we do not have free spaces'
            /*Если у пользователя не хватает денег(меньше нашего priceByPlace) то не меняем никак объект,
            возвращаем строку 'Sorry, you have not enough money'*/
        } else if (moneyQuantity < hotel.priceByPlace) {
            return 'Sorry, you do not have enough money'
            /*Если предыдущие условия не выполняются, мы добавляем в наши guests новый объект с данными(пример выше),
            которые приняли в аргументы, но кроме количества денег. Вы должны отнять стоимость места, и остаток суммы
             положить в объект.
             */
        } else {
            hotel.guests = () => `${firstName} ${lastName} ${moneyQuantity - hotel.priceByPlace}`
        }
    }
}


