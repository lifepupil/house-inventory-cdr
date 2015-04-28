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

  // Account.delTransaction = function(tx, index){
  //   var fbTransactions = fbUser.child('accounts/' + tx.type);
  //   var afTransactions = $firebaseArray(fbTransactions);
  //   afTransactions.$loaded().then(function(){
  //     var foundTx = afTransactions[index];
  //     afTransactions.$remove(foundTx);
  //   });
  // };

	Room.addItem = function(room) {
		var o = angular.copy(room);
		o.date = o.date.getTime();
		var fbTests = fbUser.child('rooms/' + o.roomName);
		// console.log(test.className, fbTests);
		var afTests = $firebaseArray(fbTests);
		afTests.$add(o);
	};




	Room.add = function(name) {
		var names = afUser.names ? afUser.names.split(',') : [];
		names.push(name);
		afUser.names = names.join(',');
		return afUser.$save();
	};

	return Room;
});
