/* --- Получаем координаты и размеры блока map__pin--main --- */
let mapPinMain = document.querySelector('.map__pin--main')
let mapPinMainWidth = mapPinMain.offsetWidth
let mapPinMainHeight = mapPinMain.offsetHeight
let mapPinMainX = Math.floor(mapPinMain.offsetLeft + mapPinMainWidth / 2)
let mapPinMainY = Math.floor(mapPinMain.offsetTop + mapPinMainHeight / 2)

/* --- И записываем в поле с адресом --- */
let inputAddress = document.getElementById('address')
inputAddress.setAttribute('placeholder', mapPinMainX + ', ' + mapPinMainY)


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

/* --- Массив данных для шаблона <template> --- */

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
            description: 'description0',
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
            description: 'description1',
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
            description: 'description2',
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
            description: 'description3',
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
            description: 'description4',
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
            description: 'description5',
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
            description: 'description6',
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
            description: 'description7',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: randomLocationAds[0][7],
            y: randomLocationAds[1][7]
        }
    }
]

/* --- отрисовка шаблона в документ --- */

let similarAdsNearby = function (similarAds) {

    // получаем блок, куда будем отрисовывать объявления .map__pins
    let mapPins = document.querySelector('.map__pins')

    // получаем полный шаблон, по которому будем клонировать объявления 
    let adsTemplate = document.querySelector('template')

    for (let i = 0; i < similarAds.length; i++) {

        // получаем элемент шаблона article и добавляем id ads-0i
        adsTemplate.content.querySelector('article').setAttribute('id', 'ads-' + '0' + (i + 1))

        // получаем элемент шаблона article прячем добавляя display = none
        // adsTemplate.content.querySelector('article').style.display = 'none'
        adsTemplate.content.querySelector('article').classList.add('hidden')

        // получаем элемент шаблона и добавляем id map-pin-0i
        adsTemplate.content.querySelector('.map__pin').setAttribute('id', 'map-pin-' + '0' + (i + 1))

        // получаем элемент шаблона и меняем SRC у popup__avatar
        adsTemplate.content.querySelector('.popup__avatar').src = similarAds[i].author.avatar

        // получаем элемент шаблона и меняем SRC у btn__img
        adsTemplate.content.querySelector('.btn__img').src = similarAds[i].author.avatar

        // получаем элемент шаблона и меняем alt у btn__img
        adsTemplate.content.querySelector('.btn__img').alt = similarAds[i].offer.title

        // получаем элемент шаблона и меняем координаты у map__pin
        adsTemplate.content.querySelector('.map__pin').style.left = similarAds[i].location.x + 'px'
        adsTemplate.content.querySelector('.map__pin').style.top = similarAds[i].location.y + 'px'

        // получаем элемент шаблона и прячем map__pin
        adsTemplate.content.querySelector('.map__pin').classList.add('hidden')

        // получаем элемент шаблона и меняем название объявления в popup__title
        adsTemplate.content.querySelector('.popup__title').textContent = similarAds[i].offer.title

        // получаем элемент шаблона и меняем адрес объявления в popup__title
        adsTemplate.content.querySelector('p > small').textContent = similarAds[i].offer.address

        // получаем элемент шаблона и меняем цену в объявлении в popup__title
        adsTemplate.content.querySelector('.popup__price').textContent = similarAds[i].offer.price

        // В блок .popup__type выведим тип жилья в зависимости от данных в массиве
        if (similarAds[i].offer.type == 'flat') {
            adsTemplate.content.querySelector('.popup__type').textContent = 'Квартира'
        }
        else if (similarAds[i].offer.type == 'bungalo') {
            adsTemplate.content.querySelector('.popup__type').textContent = 'Бунгало'
        }
        else if (similarAds[i].offer.type == 'house') {
            adsTemplate.content.querySelector('.popup__type').textContent = 'Дом'
        }
        else if (similarAds[i].offer.type == 'palace') {
            adsTemplate.content.querySelector('.popup__type').textContent = 'Дворец'
        }

        // Вывод количества гостей и комнат в блок .popup__text--capacity
        adsTemplate.content.querySelector('.popup__text--capacity').textContent = similarAds[i].offer.rooms + ' комнат для ' + similarAds[i].offer.guests + ' гостей'

        // Вывод время заезда и выезда в блок .popup__text--сheckin
        adsTemplate.content.querySelector('.popup__text--сheckin').textContent = 'Заезд после ' + similarAds[i].offer.checkin + ' выезд до ' + similarAds[i].offer.checkout

        // Вывод в список все доступные удобства в объявлении в блок .popup__features .
        let popupFeaturesArr = []
        for (let t = 0; t < similarAds[i].offer.features.length; t++) {
            popupFeaturesArr.push('<li class="feature feature--' + similarAds[i].offer.features[t] + '"></li>')
        }
        popupFeaturesList = popupFeaturesArr.join('')
        adsTemplate.content.querySelector('.popup__features').innerHTML = popupFeaturesList

        // Вывод описания объекта недвижимости в блок .popup__description
        adsTemplate.content.querySelector('.popup__description').textContent = similarAds[i].offer.description

        // Вывод всех фотографий из списка в блок .popup__photos в произвольном порядке

        let popupPhotosArr = []
        for (let a = 0; a < similarAds[i].offer.photos.length; a++) {
            popupPhotosArr.push('<li><img src="' + similarAds[i].offer.photos[a] + '" width="210" height="148"></li>')
        }
        let photosArrShuffle = function (array) {
            array.sort(() => Math.random() - 0.5);
        }
        photosArrShuffle(popupPhotosArr)
        popupPhotosList = popupPhotosArr.join('')
        adsTemplate.content.querySelector('.popup__pictures').innerHTML = popupPhotosList




        // заносим клон (дубликат) шаблона в переменную
        let adsTemplateClone = adsTemplate.content.cloneNode(true)
        // клонируем клон (дубликат) шаблона в необходимое нам место
        mapPins.appendChild(adsTemplateClone)

    }

}

similarAdsNearby(similarAds)

/* --- добавим через DOM-операции fieldset атрибут disabled. --- */

let notice = document.querySelector('.notice')
let noticeFieldset = notice.querySelectorAll('fieldset')
for (let i = 0; i < noticeFieldset.length; i++) {
    noticeFieldset[i].setAttribute('disabled', 'true');
}


mapPinMain.addEventListener('mouseup', function () { // обработчик события при отпускании левой кнопки мыши

    // У блока .map убераем класс .map--faded по событию mouseup
    document.querySelector('.map').classList.remove('map--faded')
    let mapPinArr = document.querySelectorAll('.map__pin')
    let notice = document.querySelector('.notice')
    let noticeFieldset = notice.querySelectorAll('fieldset')

    for (let i = 0; i < noticeFieldset.length; i++) {
        noticeFieldset[i].removeAttribute('disabled');
    }

    for (let i = 0; i < mapPinArr.length; i++) {
        mapPinArr[i].classList.remove('hidden')
    }

})

let ESC_KEYCODE = 'Escape';
let ENTER_KEYCODE = 'Enter';

let mapPins = document.querySelectorAll('.map__pin.hidden')
let articles = document.querySelectorAll('article.map__card')
let popupClose = document.querySelectorAll('.popup__close')

function openArticle() {
    let index = Array.from(mapPins).indexOf(this);
    articles[index].classList.remove('hidden')
}

function closeArticle() {
    let index = Array.from(popupClose).indexOf(this);
    articles[index].classList.add('hidden')
}
mapPins.forEach(mapPin => mapPin.addEventListener('click', openArticle));
popupClose.forEach(close => close.addEventListener('click', closeArticle));




/* --- 


--- */