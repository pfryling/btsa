'use strict';


/**
 * Route configuration for the biotechnology module.
 */
angular.module('biotechnology')

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/Home');

// li><a href="#/Library">e-Library</a>
//                             </li>
//                             <li><a href="#/About">BTSA Resources</a>
//                             </li>
//                             <li><a href="#/Officers">Officers</a>
//                             </li>
//                             <li><a href="#/Alumni">Alumni</a>
//                             </li>
//                             <li><a href="#/Contribute">Contributing</a>
//                             </li>
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

        .state('photos', {
            url: '/Photos',
            templateUrl: 'templates/photos.html',
            deepStateRedirect: true
        });
    }
]);