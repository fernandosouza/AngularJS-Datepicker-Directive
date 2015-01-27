(function(){
	angular
		.module('app', ['angular-datepicker']);
})();

(function(){
	angular
		.module('app')
		.controller('PickDate', PickDate);

	function PickDate($scope){
		$scope.date = '2009-06-25T00:00:00-03:00';
        $scope.onChangeDateFn = function(){
            console.log(arguments);
        }
	}
})();