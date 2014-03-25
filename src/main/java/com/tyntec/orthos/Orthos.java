package com.tyntec.orthos;

import com.tyntec.orthos.domain.Address;
import com.tyntec.orthos.domain.Customer;
import com.tyntec.orthos.repositories.AddressRepository;
import com.tyntec.orthos.repositories.CustomerRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

@ComponentScan
@EnableAutoConfiguration
@Import(RepositoryRestMvcConfiguration.class)
public class Orthos {
	public static void main (String... args) {
		ConfigurableApplicationContext context = SpringApplication.run(Orthos.class, args);
		//createDummyData(context);
	}

	private static void createDummyData(ConfigurableApplicationContext context) {
		CustomerRepository customerRepository = context.getBean(CustomerRepository.class);

		Address address = new Address();
		address.setCity("London");
		address.setHousenumber("666");
		address.setStreet("Ripperstreet ");

		Customer customer = new Customer();

		customer.setAddress(address);
		customer.setFirstName("Jack");
		customer.setLastName("The ripper");

		customerRepository.save(customer);

		customer = new Customer();
		address = new Address();
		address.setCity("Washington");
		address.setHousenumber("1");
		address.setStreet("Whitehouse");

		customer.setAddress(address);
		customer.setFirstName("Georg");
		customer.setLastName("The widow maker");
		customerRepository.save(customer);

		Iterable<Customer> all = customerRepository.findAll();
		for (Customer customer1 : all) {
			System.out.println(customer1);
		}
	}
}
