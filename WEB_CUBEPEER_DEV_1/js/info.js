var cpApp = angular.module('cubepeer', ['ngRoute']);

cpApp.directive('cubepeerFooter', function(){
    return {
        restrict: 'E',
        templateUrl: 'cubepeer-footer.html'
    };
});


cpApp.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "cubepeer-main.html"
    })
    .when("/services", {
        templateUrl : "services.html"
    })
    .when("/careers", {
        templateUrl : "careers.html"
    })
    .when("/about", {
        templateUrl : "about.html"
    })
    .when("/contacts", {
        templateUrl : "contacts.html"
    })
    .otherwise({
        redirectTo:'/'
    });
});
