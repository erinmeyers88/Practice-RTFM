angular.module("rtfmApp", ["firebase", "ui.router"])

	.constant("fb", "https://dm-real-time-forum.firebaseio.com/")

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state("threads", {
				url: "/threads",
				templateUrl: "js/threads.html",
				controller: "threadsCtrl",
				resolve: {
					threadsRef: function (threadService) {
						return threadService.getThreads();
					}
				}

			})
			.state("thread", {
				url: "/threads/:threadId",
				templateUrl: "js/thread.html",
				controller: "threadCtrl",
				resolve: {
					threadRef: function ($stateParams, threadService) {
						return threadService.getThread($stateParams.threadId);
					},
					
					commentsRef: function (threadService, $stateParams) {
						return threadService.getComments($stateParams.threadId);	
					}

				}
			});


		// $urlRouterProvider.otherwise("/threads");

	});