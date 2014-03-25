package com.tyntec.orthos.repositories;

import com.tyntec.orthos.domain.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	Customer findByLastName(@Param("lastName") String lastName);
}
