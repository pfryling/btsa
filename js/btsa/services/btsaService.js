window.biotechnology.service('btsaDataService', ['$http', '$q',
            function($http, $q) {

                //This json object (http://www.w3schools.com/json/) contains the infomation that may need to be updated thoughout the website.
                //The values below are sent to our controller when the getInfo function is called by our service (https://docs.angularjs.org/guide/services).
                // Through the "magic" of two way data-binding (https://docs.angularjs.org/tutorial/step_04) the information below will be passed through the scope to our home template.
                /////////////////////////////////
                ///////Update content here//////
                ///////////////////////////////
                var clubInfo = {
                    "BTSA": {
                        "president": {
                            "name": "Jenny Waters",
                            "email": "jwater@gmail.com"

                        },
                        "vice": {
                            "name": "Harry Ho",
                            "email": "h3penguin@gmail.com"
                        },
                        "meetinginfo": {
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