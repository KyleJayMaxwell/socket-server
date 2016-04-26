(function () {
  'use strict';

  angular.module('myApp')
    .service('NotificationService', NotificationService)
    .service('SocketService', SocketService);

  NotificationService.$inject = ['$http'];

  function NotificationService ($http) {
    return {
      get: function () {
        return $http.get('/api/notifications');
      },
      read: function (id) {
        return $http.put('/api/notifications/' + id + '/read');
      }
    };
  }

  SocketService.$inject = ['socketFactory'];

  function SocketService (socketFactory){
    return socketFactory();
  }
})();
