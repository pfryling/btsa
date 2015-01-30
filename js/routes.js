'use strict';


/*
 * Route configuration for the biotechnology website. This is where you can add new pages to our website. 
 * We use angular ui-router to determine which html page to load when a browser navigates to a given URL. 
 * For more information check out this tutorial https://egghead.io/lessons/angularjs-introduction-ui-router.
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
            templateUrl: 'templates/home.html',
            deepStateRedirect: true
        })

        .state('about', {
            url: '/About',
            templateUrl: 'templates/about.html',
            deepStateRedirect: true
        })

        .state('events', {
            url: '/Events',
            templateUrl: 'templates/events.html',
            deepStateRedirect: true
        })

        .state('officers', {
            url: '/Officers',
            templateUrl: 'templates/officers.html',
            deepStateRedirect: true
        })

        .state('library', {
            url: '/Library',
            templateUrl: 'templates/library.html',
            deepStateRedirect: true
        })

        .state('resources', {
            url: '/Resources',
            templateUrl: 'templates/resources.html',
            deepStateRedirect: true
        })

        .state('alumni', {
            url: '/Alumni',
            templateUrl: 'templates/alumni.html',
            deepStateRedirect: true
        })

        .state('contribute', {
            url: '/Contribute',
            templateUrl: 'templates/contribute.html',
            deepStateRedirect: true
        })

        .state('signup', {
            url: '/Membership',
            templateUrl: 'templates/membership.html',
            deepStateRedirect: true
        })

        .state('sponsor', {
            url: '/Sponsor',
            templateUrl: 'templates/sponsor.html',
            deepStateRedirect: true,
            controller: 'MasterCtrl'
        })

        .state('photos', {
            url: '/Photos',
            templateUrl: 'templates/photos.html',
            deepStateRedirect: true
        });
    }
]);