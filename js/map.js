// У блока .map уберите класс .map--faded.
document.querySelector('.map').classList.remove('map--faded')

/* --- Функция возвращающая массив данных в графу author:avatar --- */

// let avatarLink = []
// let authorAvatar = function() {
//     for (let i = 1; i <= 8; i++) {
//         avatarLink.push('img/avatars/user0' + i  + '.png')
//     }
//     return avatarLink
// }

/* --- Функция возвращающая массив случайных координат location --- */

let randomLocation = function () {
    /* Генератор случайных чисел от min до max X-location*/

    var mapPinsBlock = document.querySelector('.map__pins');
    var mapPinsWidth = mapPinsBlock.offsetWidth;
    let minXlocation = 0
    let maxXlocation = mapPinsWidth

    /* Генератор случайных чисел от min до max Y-location*/
    let minYlocation = 130
    let maxYlocation = 630
    let adsLocationX = []
    let adsLocationY = []
    for (i = 0; i < 8; i++) {
        let randomNumberX = Math.floor(Math.random() * (maxXlocation - minXlocation + 1)) + minXlocation
        let randomNumberY = Math.floor(Math.random() * (maxYlocation - minYlocation + 1)) + minYlocation
        adsLocationX.push(randomNumberX)
        adsLocationY.push(randomNumberY)
    }
    return [adsLocationX, adsLocationY]
}
let randomLocationAds = randomLocation()

/* --- Функция возвращающая массив случайных цен price --- */

let adsPrice = function () {
    let adsPriceArr = []
    let minAdsPrice = 100000
    let maxAdsPrice = 1000000
    for (i = 0; i < 8; i++) {
        let randomAdsPrice = Math.floor(Math.random() * (maxAdsPrice - minAdsPrice + 1)) + minAdsPrice
        randomAdsPrice = Math.floor(randomAdsPrice / 1000) * 1000
        adsPriceArr.push(randomAdsPrice)
    }
    return adsPriceArr
}
let price = adsPrice()


let similarAds = [
    //similarAds[0]
    {
        author: { avatar: 'img/avatars/user01.png' }, // +
        offer: {
            title: 'Большая уютная квартира',
            address: randomLocationAds[0][0] + ', ' + randomLocationAds[1][0],
            price: price[0] + ' \u20BD' + '/ночь',
            type: 'palace',
            rooms: 5,
            guests: 10,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][0],
            y: randomLocationAds[1][0]
        }
    },
    //similarAds[1]
    {
        author: { avatar: 'img/avatars/user02.png' }, // +
        offer: {
            title: 'Маленькая неуютная квартира',
            address: randomLocationAds[0][1] + ', ' + randomLocationAds[1][1],
            price: price[1] + ' \u20BD' + '/ночь',
            type: 'flat',
            rooms: 2,
            guests: 4,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'washer', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][1],
            y: randomLocationAds[1][1]
        }
    },
    //similarAds[2]
    {
        author: { avatar: 'img/avatars/user03.png' }, // +
        offer: {
            title: 'Огромный прекрасный дворец',
            address: randomLocationAds[0][2] + ', ' + randomLocationAds[1][2],
            price: price[2] + ' \u20BD' + '/ночь',
            type: 'house',
            rooms: 3,
            guests: 6,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'parking', 'washer', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][2],
            y: randomLocationAds[1][2]
        }
    },
    //similarAds[3]
    {
        author: { avatar: 'img/avatars/user04.png' }, // +
        offer: {
            title: 'Маленький ужасный дворец',
            address: randomLocationAds[0][3] + ', ' + randomLocationAds[1][3],
            price: price[3] + ' \u20BD' + '/ночь',
            type: 'bungalo',
            rooms: 2,
            guests: 4,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'parking', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][3],
            y: randomLocationAds[1][3]
        }
    },
    //similarAds[4]
    {
        author: { avatar: 'img/avatars/user05.png' }, // +
        offer: {
            title: 'Красивый гостевой домик',
            address: randomLocationAds[0][4] + ', ' + randomLocationAds[1][4],
            price: price[4] + ' \u20BD' + '/ночь',
            type: 'palace',
            rooms: 5,
            guests: 10,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][4],
            y: randomLocationAds[1][4]
        }
    },
    //similarAds[5]
    {
        author: { avatar: 'img/avatars/user06.png' }, // +
        offer: {
            title: 'Некрасивый негостеприимный домик',
            address: randomLocationAds[0][5] + ', ' + randomLocationAds[1][5],
            price: price[5] + ' \u20BD' + '/ночь',
            type: 'flat',
            rooms: 2,
            guests: 4,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'washer', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][5],
            y: randomLocationAds[1][5]
        }
    },
    //similarAds[6]
    {
        author: { avatar: 'img/avatars/user07.png' }, // +
        offer: {
            title: 'Уютное бунгало далеко от моря',
            address: randomLocationAds[0][6] + ', ' + randomLocationAds[1][6],
            price: price[6] + ' \u20BD' + '/ночь',
            type: 'house',
            rooms: 3,
            guests: 6,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'parking', 'washer', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][6],
            y: randomLocationAds[1][6]
        }
    },
    //similarAds[7]
    {
        author: { avatar: 'img/avatars/user08.png' }, // +
        offer: {
            title: 'Неуютное бунгало по колено в воде',
            address: randomLocationAds[0][7] + ', ' + randomLocationAds[1][7],
            price: price[7] + ' \u20BD' + '/ночь',
            type: 'bungalo',
            rooms: 1,
            guests: 2,
            checkin: '14:00',
            checkout: '10:00',
            features: ['wifi', 'parking', 'conditioner'],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][7],
            y: randomLocationAds[1][7]
        }
    }
]

/* --- отрисовка шаблона в документ --- */

// получаем блок, куда будем отрисовывать объявления .map__pins
let mapPins = document.querySelector('.map__pins')

// получаем шаблон, по которому будем клонировать объявления 
let AdsTemplate = document.querySelector('template').content.querySelector('.map__card')
let mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin')


let similarAdsNearby = function (similarAds) {
    for (let i = 0; i < similarAds.length; i++) {
        let adsElement = mapPins.appendChild(AdsTemplate.cloneNode(true))
        let mapPinBtn = mapPins.appendChild(mapPinTemplate.cloneNode(true))
        mapPinBtn.querySelector('img').src = similarAds[i].author.avatar
        mapPinBtn.querySelector('img').alt = similarAds[i].offer.title
        mapPinBtn.style.left = similarAds[i].location.x + 'px'
        mapPinBtn.style.top = similarAds[i].location.y + 'px'
        adsElement.querySelector('.popup__avatar').src = similarAds[i].author.avatar
        adsElement.querySelector('.popup__title').textContent = similarAds[i].offer.title
        adsElement.querySelector('p > small').textContent = similarAds[i].offer.address
        adsElement.querySelector('.popup__price').textContent = similarAds[i].offer.price

        if (similarAds[i].offer.type == 'flat') {
            adsElement.querySelector('h4').textContent = 'Квартира'
        }
        else if (similarAds[i].offer.type == 'bungalo') {
            adsElement.querySelector('h4').textContent = 'Бунгало'
        }
        else if (similarAds[i].offer.type == 'house') {
            adsElement.querySelector('h4').textContent = 'Дом'
        }
        else if (similarAds[i].offer.type == 'palace') {
            adsElement.querySelector('h4').textContent = 'Дворец'
        }
        adsElement.querySelector('.popup__text--capacity').textContent = similarAds[i].offer.rooms + ' комнат для ' + similarAds[i].offer.guests + ' гостей'
        adsElement.querySelector('.popup__text--сheckin').textContent = 'Заезд после ' + similarAds[i].offer.checkin + ' выезд до ' + similarAds[i].offer.checkout

    }

}
similarAdsNearby(similarAds)

