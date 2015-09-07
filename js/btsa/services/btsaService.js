window.biotechnology.service('btsaDataService', ['$http', '$q',
function($http, $q) {


    // The json object (http://www.w3schools.com/json/) below which I named clubInfo 
    // contains all the infomation needed to updated the website.
    // The values below are sent to our controller when the getInfo function is called by our service (https://docs.angularjs.org/guide/services).
    // Through the "magic" of two way data-binding (https://docs.angularjs.org/tutorial/step_04) the information below will be passed 
    // through the scope to be displayed in our home template.
    
    /////////////////////////////////
    ///////Update content here//////
    ///////////////////////////////
    var clubInfo = {
            "president": {
                "name": "Martin Somo",
                "email": "somomartin@yahoo.com"

            },
            "vice": {
                "name": "Michelle Pinchart",
                "email": "sdsubtsa@gmail.com"
            },
            "meetinginfo": {
                "time": "Monday at 5:30",
                "location": "HH 130",
                "semester": "Fall 2015"
            }

    };

    this.getInfo = function() {
        return clubInfo
    }

}]);