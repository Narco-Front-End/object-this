export const hotel = new Object();


const Hotel = {
    quantityOfPlaces: 30,
    priceByPlace: 20,
    bankAccount: 0,
    guests: {},
}

function getLength(){
    for(let key in Hotel){
        console.log(Hotel.guests)
    }
}

getLength();


function getActualFreePlace(){
    return Hotel.quantityOfPlaces-getLength;
}

getActualFreePlace();

function paidPerPlace(){
    return Hotel.bankAccount+Hotel.priceByPlace;
}

paidPerPlace();

function checkInGuest(firstName, lastName, moneyQuantity){

    /*Если в отеле нет свободных мест, то ничего не меняет внутри
    объекта и возвращает строку 'Sorry, we have not free spaces'
     */
    if(Hotel.guests.length===30){
        return 'Sorry, we do not have free spaces'
        /*Если у пользователя не хватает денег(меньше нашего priceByPlace) то не меняем никак объект,
        возвращаем строку 'Sorry, you have not enough money'*/
    } else if(moneyQuantity<Hotel.priceByPlace){
        return 'Sorry, you do not have enough money'
        /*Если предыдущие условия не выполняются, мы добавляем в наши guests новый объект с данными(пример выше),
        которые приняли в аргументы, но кроме количества денег. Вы должны отнять стоимость места, и остаток суммы
         положить в объект.
         */
    } else {
        Hotel.guests=()=>`${firstName} ${lastName} ${moneyQuantity-Hotel.priceByPlace}`
    }
}

checkInGuest();