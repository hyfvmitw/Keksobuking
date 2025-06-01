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

let similarAds = [
    //similarAds[0]
    {
        author: {avatar:'img/avatars/user01.png'}, // +
        offer: {
            title: 'Большая уютная квартира',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 100,
            y: 100
        }
    },
    //similarAds[1]
    {
        author: {avatar:'img/avatars/user02.png'}, // +
        offer: {
            title: 'Маленькая неуютная квартира',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 150,
            y: 100
        }
    },
    //similarAds[2]
    {
        author: {avatar:'img/avatars/user03.png'}, // +
        offer: {
            title: 'Огромный прекрасный дворец',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 200,
            y: 100
        }
    },
    //similarAds[3]
    {
        author: {avatar:'img/avatars/user04.png'}, // +
        offer: {
            title: 'Маленький ужасный дворец',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 250,
            y: 100
        }
    },
    //similarAds[4]
    {
        author: {avatar:'img/avatars/user05.png'}, // +
        offer: {
            title: 'Красивый гостевой домик',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 300,
            y: 100
        }
    },
    //similarAds[5]
    {
        author: {avatar:'img/avatars/user06.png'}, // +
        offer: {
            title: 'Некрасивый негостеприимный домик',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 350,
            y: 100
        }
    },
    //similarAds[6]
    {
        author: {avatar:'img/avatars/user07.png'}, // +
        offer: {
            title: 'Уютное бунгало далеко от моря',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 400,
            y: 100
        }
    },
    //similarAds[7]
    {
        author: {avatar:'img/avatars/user08.png'}, // +
        offer: {
            title: 'Неуютное бунгало по колено в воде',
            address: '600, 350',
            price: 1000,
            type: 'palace',
            rooms: 1,
            guests: 5,
            checkin: '12:00',
            checkout: '12:00',
            features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            description: '',
            photos: ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"],
        },
        location: {
            x: 450,
            y: 100
        }
    }
]

console.log(similarAds.length);

// console.log(similarAds[0].author)

// отрисовка шаблона в документ

// получаем блок, куда будем отрисовывать объявления .map__pins

let mapPins = document.querySelector('.map__pins')

// получаем шаблон, по которому будем клонировать объявления 

let AdsTemplate = document.querySelector('template').content.querySelector('.map__card')
let mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin')


let similarAdsNearby = function(similarAds) {
    for (let i = 0; i < similarAds.length; i++) {
    let adsElement = mapPins.appendChild(AdsTemplate.cloneNode(true))
    let mapPinBtn = mapPins.appendChild(mapPinTemplate.cloneNode(true))
    mapPinBtn.querySelector('img').src = similarAds[i].author.avatar
    mapPinBtn.querySelector('img').alt = similarAds[i].offer.title
    mapPinBtn.style.left = similarAds[i].location.x + 'px'
    mapPinBtn.style.top = similarAds[i].location.y + 'px'
    adsElement.querySelector('h3').textContent = similarAds[i].offer.title
    adsElement.querySelector('.popup__avatar').src = similarAds[i].author.avatar


    }
    
}
similarAdsNearby(similarAds)