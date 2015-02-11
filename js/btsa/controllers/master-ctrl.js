/**
 * Master Controller
 */
angular.module('biotechnology')
    .controller('MasterCtrl', ['$scope','btsaDataService', MasterCtrl]);

function MasterCtrl($scope, btsaDataService) {
			$scope.isCollapsed = false;

            $scope.clubSettings = btsaDataService.getInfo();
 
}