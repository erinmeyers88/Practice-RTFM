angular.module("rtfmApp")
	.controller("threadsCtrl", function ($scope, threadsRef, $firebaseArray) {
		$scope.threads = $firebaseArray(threadsRef);

		$scope.threads.$loaded().then(function (threads) {
			console.log(threads);
		});

		$scope.createThread = function (username, threadTitle) {
			$scope.threads.$add({
				username: username,
				threadTitle: threadTitle,
			});
		};
	});