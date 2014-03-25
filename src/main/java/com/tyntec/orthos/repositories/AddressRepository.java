package com.tyntec.orthos.repositories;

import com.tyntec.orthos.domain.Address;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AddressRepository extends CrudRepository<Address, Integer> {
}
