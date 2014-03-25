var customerCtrls = angular.module('customerCtrls', ['ui.bootstrap', 'orthosServices']);
var addressCtrls = angular.module('addressCtrls', []);
var orthosController = angular.module('orthosCtrls', []);

orthosController.controller('MainMenuCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.isItemSelected = function(selectedLocation) {
            return selectedLocation === $location.path();
        };
    }
]);

customerCtrls.controller('CustomerListCtrl', ['$scope', '$http', '$modal', 'CustomerRepository', function ($scope, $http, $modal, CustomerRepository) {
    $http.get('customers').success(function (data) {
        $scope.customers = data._embedded.customers
    });

    $scope.setAddressDetail = function (customer) {
        $scope.selectedCustomer = customer;
        $http.get(customer._links.address.href).success(function (data) {
            $scope.addressDetail = data
        });
    };

    $scope.createNewCustomer = function() {
        var modalInstance = $modal.open({
            backdrop: true,
            keyboard: true,
            backdropClick: true,
            templateUrl: 'partials/customer-form.html',
            controller: ModalInstanceCtrl
        });

        modalInstance.result.then(function(customer, address) {
            var newCustomer = CustomerRepository.addCustomer(customer, address)
            $scope.customers.push(newCustomer);
        });
    };


    $scope.addressDetail = "";

    $scope.orderProp = 'firstName';
    $scope.reverse = false;
}]);

var ModalInstanceCtrl = function($scope, $modalInstance) {

    $scope.customer = {
        firstName: "",
        lastName: ""
    };
    $scope.address = {
        street: "",
        housenumber: "",
        city: ""
    };

    $scope.save = function() {
        $modalInstance.close($scope.customer, $scope.address);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('Cancel');
    };
};

customerCtrls.controller('CustomerDetailCtrl',
    function ($scope, $routeParams, $http) {

        $http.get('customers/' + $routeParams.customerId).success(function (data) {
            $scope.customer = data
            $http.get($scope.customer._links.address.href).success(function (data) {
                $scope.address = data
            });
        });

        $scope.customerId = $routeParams.customerId
    }
);

addressCtrls.controller('AddressListCtrl',
    function ($scope, $http) {
        $http.get('/addresses').success(function (data) {
            $scope.addresses = data._embedded.addresses
        });

        $scope.orderProp = 'city';
        $scope.reverse = false;
    }
);