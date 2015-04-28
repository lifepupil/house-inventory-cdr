'use strict';

angular.module('house-inventory-cdr')
.controller('RoomsCtrl', function($scope, Room) {
	var afUser = $scope.afUser = Room.init();
	afUser.$loaded().then(syncNames);




	$scope.addRoom = function(name) {
		Room.add(name).then(syncNames);
		$scope.roomName = '';
	};

	function syncNames() {
		$scope.names = afUser.names ? afUser.names.split(',') : [];
	}
});
