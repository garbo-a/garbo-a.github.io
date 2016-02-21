'use strict';

app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Book store';
    $scope.promo = 'Promo text';
    $scope.products = [{
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'img/the-book-of-trees.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Arised from PEPEL',
        price: 25,
        pubdate: new Date('2012', '02', '03'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'a RAT',
        price: 5,
        pubdate: new Date('2006', '07', '01'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
    }, {
        name: 'Kate',
        price: 1111,
        pubdate: new Date('2016', '12', '02'),
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
    }];
    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);

//# sourceMappingURL=MainController-compiled.js.map