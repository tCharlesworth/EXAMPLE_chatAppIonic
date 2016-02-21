angular.module('starter')
    .controller('homeCtrl', function ($scope, $state) {
        $scope.joinRoom = function (username) {
            // window.alert(username);
            $state.go('Chat', { username: username });
        };
    });