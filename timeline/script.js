var MainApp = angular.module('MainApp', ['ngRoute']);

MainApp.config(function($routeProvider){ // ngRouteの$routeProviderが使える。
    $routeProvider.
    when('/', { // '/'にアクセスされたときは
        controller: 'mainsCtrl',  // mainsCtrlを使って
        templateUrl: 'view1.html', // view1.htmlの中身をng-viewの中に入れる。
    }).
    when('/view2',{ // 以下同様につなげられる。
        controller: 'mainsCtrl',
        templateUrl: 'view2.html',
    }).
    otherwise({ // 上のものに該当しなかった場合は
        redirectTo: '/' // '/'にリダイレクト
    });
});

MainApp.controller('mainsCtrl', function($http, $scope){
    // いい感じの処理。
});