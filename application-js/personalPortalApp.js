var personalPortalApp = angular.module("personalPortalApp", ['ngCookies','ngRoute',   
                                                                     ,'ngAnimate', 'ui.bootstrap', 'ngSanitize']);



personalPortalApp.config(['$routeProvider', function(routeProvider) {


	routeProvider.when("/", {
		templateUrl: "home.html",
		controller: "",
		resolve: {
		}
	})

}]);