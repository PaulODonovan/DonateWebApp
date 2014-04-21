// var rangeVal = 0;
// var elem = document.querySelector('.js-range');
var sliderVal = 0;

angular.module('app', [])

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
})



.directive('spinner', function () {
	return {
		restrict: 'E',
		template: '<span> €<input id="spinner" type="number" ng-model="amount" max="10000" min="0" step="5"></span>',
		replace: true,
		scope: {
	      amount: '='
	    },
		link: function ( scope, elem, attr ) {
			scope.$watch('amount', function (newVal, oldVal) {
				console.log("spinner says scope.amount : " + scope.amount);

				// This is to update the slider. There is a bug where changing the slider after the spinner causes a jump, probably to do with how the powerange slider calculates it's css.
				// var spinnerVal = document.getElementById('spinner').value;
				var newCss = sliderVal / 100 + "%";
				// console.log("spinnerVal :" + spinnerVal);
				document.querySelector('.range-quantity').style.width = newCss;
				document.querySelector('.range-handle').style.left = newCss;
				document.getElementById('spinner').value = scope.amount;
			});
		}
	};
})


.directive('slider', function () {
	return {
		restrict: 'E',
		template: '<input type="text" class="js-range" ng-model="amount"/>',
		replace: true,
		scope: {
	      amount: '='
	    },
		link: function ( scope, elem, attr ) {
			elem = elem[0]
			new Powerange(elem, {
				min: 0,
				max: 10000,
				start: 0,
				//hideRange: true
			});

			scope.$watch('amount', function (newVal, oldVal) {
				//elem.value = scope.preview.donation;
				console.log("slider says scope.amount : " + scope.amount);
				console.log(" slider says elem.value: " + elem.value);
				// document.getElementById('spinner').value = elem.value;

				sliderVal = newVal;
				console.log("sliderVal :" + sliderVal);
			});
		}
	};
})


.directive('progressBar', function () {
	return {
		restrict: 'E',
		template: '<div class="bar"><div class="barFill" style="width:{{ percentage }}%;"></div></div>',
		replace: true,
		link: function ( scope, element, attr ) {
			scope.$watch('amount', function () {
				// set the project donation
				scope.project.donation = scope.amount * scope.project.ration;
				console.log("project.donation for " + scope.project.name + " : " + scope.project.donation);
				// set the project bar fill widths
				scope.percentage = (scope.project.donation + scope.project.raised) / scope.project.target * 100
			});
		}
	};
});