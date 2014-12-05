window.biotechnology.service('btsaDataService', ['$http', '$q',
    function($http, $q) {

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
                "time": "Monday at 5:30",
                "location": "HH-130",
                "semester": "Spring 2015"
            }

        };

        this.getSettings = function() {
            return clubSettings
        }
    }
]);