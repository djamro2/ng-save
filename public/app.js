var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.controller('HomeController', ['$scope', function($scope){
	$scope.testObject = {
		name: 'Dan',
		occupation: 'student',
		Id: 1
	}
}]);

app.directive('ngSaveObject', ['$resource', function($resource){
	
	return {
		restrict: 'A',
		replace: true,
		scope: {
			route: '@ngSaveRoute'	
		},
		link: function(scope, element, attribute){
			element.bind('click', function(event){
				
				var objectToSave = JSON.parse(attribute.ngSaveObject);
				var item = $resource(scope.route);
				item.save(objectToSave);
				
			});
		}
	}
	
}]);