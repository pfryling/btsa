window.biotechnology.service('btsaDataService', ['$http', '$q',
    function($http, $q) {

        //This json object contains all the infomation used thoughout the website.
        // Update meeting info and 
        var clubInfo = {
            "officers": {
                "president": {
                    "name": "Jenny Waters",
                    "email": "jwater@gmail.com"
      
                },
                "vice": "Harry Ho",
                "tresurer": "Paul Fryling"
            },
            "meetinginfo": {
                //These values get passed by the scope in our controller to the 
                "time": "Monday at 5:30",
                "location": "HH-130",
                "semester": "Spring 2015"
            }

        };

        this.getInfo = function() {
            return clubInfo
        }
    }
]);