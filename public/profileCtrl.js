angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService, userInfo ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = console.log('Whats up!');
});
