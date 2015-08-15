angular.module('myApp', [])
.controller('funTimes', function($scope) {
	$scope.buttonCount = 0;
	$scope.addUp = function() {
		$scope.buttonCount++;
	}
})