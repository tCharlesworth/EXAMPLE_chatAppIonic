angular.module('starter')
    .service('chatService', function($http) {
        this.sendMessage = function(info) {
            console.log('sending message: ', info);
            return $http({
                method: 'POST',
                url: 'http://ioniChat.tcharlesworth.com/chats',
                data: info
            });
        };
        
        this.getMessages = function() {
            return $http({
                method: 'GET',
                url: 'http://ioniChat.tcharlesworth.com/chats'
            });
        };
    });