photoApp.service('PhotoSrv', function () {
    var photos = [
        {
            id: 1,
            name: 'Summer.jpeg',
            likes: 3,
            author: "Ivan Ivanov",
            visible: true
        },
        {
            id: 2,
            name: 'Autumn.png',
            likes: 6,
            author: "Vasya Pupkin",
            visible: false
        },
        {
            id: 3,
            name: 'Winter.png',
            likes: 9,
            author: "Petr Petrov",
            visible: true
        },
        {
            id: 4,
            name: 'Spring.JPG',
            likes: 12,
            author: "Anna Ivanova",
            visible: true
        }
    ];

    return {
        getAllPhotos: function () {
            return photos;
        },
        getPhotoById: function(id) {
            var result = -1;

            for(var i = 0; i < photos.length; i++) {
                if(photos[i].id == id) {
                    result = photos[i];
                }
            }

            return result;
        }
    }
});