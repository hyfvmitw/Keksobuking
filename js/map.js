// У блока .map уберите класс .map--faded.
document.querySelector('.map').classList.remove('map--faded')

// получаем блок, куда будем отрисовывать объявления .map__pins
let adsElement = document.querySelector('.map__pins')

// получаем шаблон, по которому будем клонировать объявления 
let AdsTemplate = document.querySelector('template').content.querySelector('.map__card')
// console.log(AdsTemplate);

// отрисовка шаблона в документ
adsElement.appendChild(AdsTemplate.cloneNode(true))

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
            x: 150,
            y: 300
        }
    },
    //similarAds[1]
    {
        author: {avatar:'img/avatars/user02.png'}, // +
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
            x: 150,
            y: 300
        }
    },
    //similarAds[2]
    {
        author: {avatar:'img/avatars/user03.png'}, // +
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
            x: 150,
            y: 300
        }
    },
    //similarAds[3]
    {
        author: {avatar:'img/avatars/user04.png'}, // +
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
            x: 150,
            y: 300
        }
    },
    //similarAds[4]
    {
        author: {avatar:'img/avatars/user05.png'}, // +
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
            x: 150,
            y: 300
        }
    },
    //similarAds[5]
    {
        author: {avatar:'img/avatars/user06.png'}, // +
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
            x: 150,
            y: 300
        }
    },
    //similarAds[6]
    {
        author: {avatar:'img/avatars/user07.png'}, // +
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
            x: 150,
            y: 300
        }
    },
    //similarAds[7]
    {
        author: {avatar:'img/avatars/user08.png'}, // +
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
            x: 150,
            y: 300
        }
    }
]

// console.log(similarAds);