'use strict';

angular.module('house-inventory-cdr')
.factory('Room', function($rootScope, $firebaseObject, $firebaseArray) {
	var fbUser;
	var afUser;

	function Room() {
	}

	Room.init =  function() {
		fbUser = $rootScope.fbRoot.child('rooms/' + $rootScope.activeUser.uid);
		afUser = $firebaseObject(fbUser);
		return afUser;
	};

	Room.addItem = function(room) {
		
	};

	Room.add = function(name) {
		var names = afUser.names ? afUser.names.split(',') : [];
		names.push(name);
		afUser.names = names.join(',');
		return afUser.$save();
	};

	return Room;
});
