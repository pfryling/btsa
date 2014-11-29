'use strict';


/**
 * Route configuration for the biotechnology module.
 */
angular.module('biotechnology')

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/Home');

        // Application routes
        $stateProvider

        .state('home', {
            url: '/Home',
            templateUrl: 'templates/home.html'
        })

        .state('about', {
            url: '/About',
            templateUrl: 'templates/about.html'
        })

        .state('events', {
            url: '/Events',
            templateUrl: 'templates/events.html'
        })

        .state('leaders', {
            url: '/Leaders',
            templateUrl: 'templates/officers.html'
        })

        .state('photos', {
            url: '/Photos',
            templateUrl: 'templates/photos.html'
        });
    }
]);