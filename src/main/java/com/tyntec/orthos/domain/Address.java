package com.tyntec.orthos.domain;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public @Data class Address {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Integer id;

	@Column(nullable = false)
	private String street;
	@Column(nullable = false)
	private String housenumber;

	@Column(nullable = false)
	private String city;

	@OneToMany
	private List<Customer> customers;
}
