!function(n){function e(t){if(o[t])return o[t].exports;var s=o[t]={exports:{},id:t,loaded:!1};return n[t].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var o={};return e.m=n,e.c=o,e.p="/dist/",e(0)}([function(module,exports,__webpack_require__){eval("/* Cosmic JS copyright 2015 Tony Spiro */\n\n/* Configure\n======================== */\nvar app = {};\napp.config = {};\napp.config.bucket_slug = (undefined) || \"wedding-site\";\napp.config.url = \"https://api.cosmicjs.com/v1\";\napp.config.mediaurl = \"https://cosmicjs.com/uploads\";\n\nvar cosmicApp = angular.module('cosmicApp',[]);\n\n\ncosmicApp.directive(\"goTo\", function () {\n    return function (scope, element) {\n        element.on(\"click\", function (e) {           \n            var $anchor = $(this);\n		        $('html, body').stop().animate({\n		            scrollTop: $($anchor.attr('href')).offset().top\n		        }, 1500, 'easeInOutExpo');\n		        e.preventDefault();\n        });\n    }\n});\n\ncosmicApp.controller('mainController', function($scope, $http, $sce) {\n   \n	$http({\n			// Get Cosmic JS content\n			url: app.config.url + \"/\" + app.config.bucket_slug + \"/types\",\n			  method: \"GET\",\n		}).success(function(data, status, headers, config) {\n			\n			// render html\n			$scope.renderHtml = function (htmlCode) {\n          return $sce.trustAsHtml(htmlCode);\n      };\n\n			$scope.mediaurl = app.config.mediaurl;\n			\n			/* Section objects bind to slug as key\n			==================================== */\n			var sections = data.types.sections;\n\n			$scope.section = [];\n\n			sections.forEach(function(section){\n\n				$scope.section[section.slug] = section;\n\n			});\n\n			/* Bridesmaids\n			==================================== */\n			$scope.bridesmaids = data.types.bridesmaids;\n\n			/* Groomsmen\n			==================================== */\n			$scope.groomsmen = data.types.groomsmen;\n\n			/* Map\n			==================================== */\n			setTimeout(function(){\n				var venuinfo = $('#venueinfo').html();\n				$('#infoBox').html(venuinfo);\n			}, 500);\n\n			// Fade in\n			$('body').animate({ 'opacity' : '1' });\n		\n		});\n\n});\n\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/app.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/app.js?")}]);