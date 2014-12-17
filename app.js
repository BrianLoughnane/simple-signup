angular.module('app', [])
	.directive('optIn', function() {
		return {
			templateUrl: './signup.html',
			restrict: 'E',
			transclude: true,
			replace: false
		}
	});