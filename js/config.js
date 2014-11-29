window.biotechnology = angular.module('biotechnology', ['ui.bootstrap', 'ui.router']);

// config
(function(app) {
    app.config([
        '$provide',
        function($provide) {

            //default settings set
            var today = new Date();
            today.setHours(0, 0, 0, 0);

            var yesterday = today.getDate() - 1;

            //make updates here after changing of the guard
            var clubSettings = {
                "officers": {
                    "president": {
                        "name": "Jenny Watters",
                        "email": "jwater@gmail.com",
                        "blurb": "hi im jenny...",
                        "quote": "quote stuff"
                    },
                    "vice": "Joe Shmo",
                    "tresurer": "Paul Fryling"
                },
                "meetinginfo": {
                    "time": "5:30",
                    "location": "HH-130"
                }

            };

            $provide.constant('clubSettings', clubSettings);

        }
    ])
}(window.biotechnology));