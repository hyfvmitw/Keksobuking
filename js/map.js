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

// similarAds[0].offer.features[0]
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








// console.log(similarAds[i].author.avatar)
// меняем в шаблоне аватаров авторов
// adsTemplate.content.querySelector('.popup__avatar').src = similarAds[0].author.avatar

// console.log(adsTemplate.content.querySelector('.popup__avatar'));

let similarAdsNearby = function (similarAds) {

    // получаем блок, куда будем отрисовывать объявления .map__pins
    let mapPins = document.querySelector('.map__pins')

    // получаем полный шаблон, по которому будем клонировать объявления 
    let adsTemplate = document.querySelector('template')

    for (let i = 0; i < similarAds.length; i++) {

        // получаем элемент шаблона и меняем SRC у popup__avatar
        adsTemplate.content.querySelector('.popup__avatar').src = similarAds[i].author.avatar

        // получаем элемент шаблона и меняем SRC у btn__img
        adsTemplate.content.querySelector('.btn__img').src = similarAds[i].author.avatar

        // получаем элемент шаблона и меняем alt у btn__img
        adsTemplate.content.querySelector('.btn__img').alt = similarAds[i].offer.title

        // получаем элемент шаблона и меняем координаты у map__pin
        adsTemplate.content.querySelector('.map__pin').style.left = similarAds[i].location.x + 'px'
        adsTemplate.content.querySelector('.map__pin').style.top = similarAds[i].location.y + 'px'

        // получаем элемент шаблона и меняем название объявления в popup__title
        adsTemplate.content.querySelector('.popup__title').textContent = similarAds[i].offer.title

        // получаем элемент шаблона и меняем адрес объявления в popup__title
        adsTemplate.content.querySelector('p > small').textContent = similarAds[i].offer.address

        // получаем элемент шаблона и меняем цену в объявлении в popup__title
        adsTemplate.content.querySelector('.popup__price').textContent = similarAds[i].offer.price

        if (similarAds[i].offer.type == 'flat') {
            adsTemplate.content.querySelector('h4').textContent = 'Квартира'
        }
        else if (similarAds[i].offer.type == 'bungalo') {
            adsTemplate.content.querySelector('h4').textContent = 'Бунгало'
        }
        else if (similarAds[i].offer.type == 'house') {
            adsTemplate.content.querySelector('h4').textContent = 'Дом'
        }
        else if (similarAds[i].offer.type == 'palace') {
            adsTemplate.content.querySelector('h4').textContent = 'Дворец'
        }

        adsTemplate.content.querySelector('.popup__text--capacity').textContent = similarAds[i].offer.rooms + ' комнат для ' + similarAds[i].offer.guests + ' гостей'
        adsTemplate.content.querySelector('.popup__text--сheckin').textContent = 'Заезд после ' + similarAds[i].offer.checkin + ' выезд до ' + similarAds[i].offer.checkout

        let popupFeaturesArr = []
        for (let t = 0; t < similarAds[i].offer.features.length; t++) {
        popupFeaturesArr.push('<li class="feature feature--' + similarAds[i].offer.features[t] + '"></li>')
        }
        popupFeaturesList = popupFeaturesArr.join('')

        adsTemplate.content.querySelector('.popup__features').innerHTML = popupFeaturesList


        // заносим клон (дубликат) шаблона в переменную
        let adsTemplateClone = adsTemplate.content.cloneNode(true)
        // клонируем клон (дубликат) шаблона в необходимое нам место
        mapPins.appendChild(adsTemplateClone)

    }

}

similarAdsNearby(similarAds)

