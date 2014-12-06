/**
 * Master Controller
 */
angular.module('biotechnology')
    .controller('MasterCtrl', ['$scope','btsaDataService', MasterCtrl]);

function MasterCtrl($scope, btsaDataService) {



            $scope.clubSettings = btsaDataService.getInfo();
 
}