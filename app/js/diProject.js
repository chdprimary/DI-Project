'use strict';

var diProject = angular.module('di-project-app', []);

diProject.controller('di-project-controller', ['$scope', '$http', function($scope, $http) {
	// Headers for ng-repeating on #friends-table.
	$scope.tableHeaders = ['Enable', 'Name', 'Age', 'Hair Color', 'Occupation', 'Latitude', 'Longitude'];

	// Grab friends.json, set = to $scope.friends.
	$http.get('friends/friends.json')
		.success(function(data) {
			if (data) {
				$scope.friends = data;
			}
		})
		.error(function(data) {
			console.log(data);
		});

	// For each friend, these functions are called. The one returning true enables a corresponding CSS class through ng-class.
	$scope.isBlonde = function(friend) { return friend.hairColor === 'blonde'; }
	$scope.isRedhead = function(friend) { return friend.hairColor === 'red'; }
	$scope.isBrunette = function(friend) { return friend.hairColor === 'brown'; }
	$scope.isBlackHaired = function(friend) { return friend.hairColor === 'black'; }
	$scope.isBald = function(friend) { return friend.hairColor === 'bald'; }
}]);