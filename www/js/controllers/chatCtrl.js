angular.module('starter')
    .controller('chatCtrl', function ($scope, $state, chatService) {
        $scope.user = $state.params.username;

        $scope.sendMessage = function (message) {
            console.log('hi', message);
            chatService.sendMessage({user: $scope.user, message: message});
        };
        
        $scope.goHome = function() {
            clearInterval(timer);
            $state.go('Home');
        };
        
        var loadMessages = function() {
            chatService.getMessages().then(function(data) {
                $scope.messages = data.data;
            });
        }
        
        var timer = setInterval(loadMessages, 1000);
    });