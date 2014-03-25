var orthosServices = angular.module('orthosServices', ['ngResource']);

orthosServices.factory('CustomerRepository', function ($scope, $resource, $log) {
    var addCustomer = function ($scope, country, address) {
        var Address = $resource('/addresses');
        var newAddress = new Address();
        newAddress.street = address.street;
        newAddress.city = address.city;
        newAddress.housenumber = address.houseNumber;

        newAddress.$save({}, function (data, headers) {
            var addressLocation = headers().location
            var Customer = $resource('/customers');
            var newCustomer = new Customer();
            newCustomer.firstName = country.firstName
            newCustomer.lastName = country.lastName
            newCustomer.address = addressLocation
            newCustomer.$save();
            $scope.customers.push(newCustomer);
        });


    };

    return {
        addCustomer: addCustomer
    }
});