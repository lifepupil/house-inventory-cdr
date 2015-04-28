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

	Room.add = function(name) {
		// console.log('inside test.js and the name is', name);
		// console.log('the afUser is', afUser);
		var names = afUser.names ? afUser.names.split(',') : [];
		names.push(name);
		afUser.names = names.join(',');
		return afUser.$save();
	};

	return Room;
});
