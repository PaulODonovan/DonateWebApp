angular.module('app', ['directive.spinner', 'directive.slider', 'directive.progressbar'])
.controller('DonationCtrl', function ( $scope ) {

	$scope.projects = [
		{
			name: 'Rainwater Harvesting Tanks',
			target: 10000,
			raised: 1000,
			ration: 0.4
		},
		{
			name: 'Girls Secondary School',
			target: 17000,
			raised: 5000,
			ration: 0.3
		},
		{
			name: 'Agriculture and Environmental Conservation',
			target: 50000,
			raised: 2000,
			ration: 0.2
		},
		{
			name: 'Underprivileged Children Program',
			target: 23000,
			raised: 5000,
			ration: 0.075
		},
		{
			name: 'Food & Seed Store',
			target: 27000,
			raised: 5500,
			ration: 0.025
		}
	];

	// Starting donation at 0
	$scope.amount = 0;
});


angular.module('directive.spinner', [])
.directive('spinner', function () {
	return {
		restrict: 'E',
		template: '<input id="spinner" type="number" ng-model="amount" max="10000" min="0" step="10">',
		replace: true,
		scope: {
	      amount: '='
	    },
		link: function ( scope, element, attr ) {
			scope.$watch('amount', function (newVal, oldVal) {
			});
		}
	};
});


angular.module('directive.slider', [])
.directive('slider', function () {
	return {
		restrict: 'E',
		template: '<input type="range" class="native-range" ng-model="amount" min="0" max="10000"/>',
		replace: true,
		scope: {
	      amount: '='
	    },
		link: function ( scope, element, attr ) {
			scope.$watch('amount', function () {
				spinner.value = scope.amount;
			});
		}
	};
});


angular.module('directive.progressbar', [])
.directive('progressBar', function () {
	return {
		restrict: 'E',
		template: '<div class="bar"><div class="barFill" project="project" amount="amount" style="width:{{ percentage }}%;"></div></div>',
		replace: true,
		scope: {
			amount: '@',
			project: '='
		},
		link: function ( scope, element, attr ) {
			// console.log($scope.project);

			scope.$watch('amount', function () {
				// set the project donation
				scope.project.donation = parseInt(scope.amount) * scope.project.ration;
				// console.log("project.donation for " + $scope.project.name + " : " + $scope.project.donation);
				// set the project bar fill widths
				scope.percentage = (scope.project.donation + scope.project.raised) / scope.project.target * 100;
			});
		}
	};
});


