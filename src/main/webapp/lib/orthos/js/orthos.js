var orthosApp = angular.module('orthosApp', ['ngRoute', 'customerCtrls', 'addressCtrls', 'orthosCtrls', 'orthosServices'])

orthosApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/customers', {
                templateUrl: 'partials/customer-list.html',
                controller: 'CustomerListCtrl'

            }
        ).when('/customers/:customerId', {
                templateUrl: 'partials/customer-detail.html',
                controller: 'CustomerDetailCtrl'
            }
        ).when('/addresses', {
                templateUrl: 'partials/address-list.html',
                controller: 'AddressListCtrl'
            }

        ).otherwise({
                redirectTo: '/customers'
            }
        );
    }
]);

orthosApp.run(function($rootScope, $location) {
    $rootScope.location = $location;
    $rootScope.query = "";
});

