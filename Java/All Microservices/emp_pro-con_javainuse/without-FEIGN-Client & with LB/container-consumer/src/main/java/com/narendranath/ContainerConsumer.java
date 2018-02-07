package com.narendranath;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.client.RestClientException;



@SpringBootApplication
@EnableDiscoveryClient
public class ContainerConsumer {

	public static void main(String[] args) throws RestClientException, IOException {
		
		SpringApplication.run(ContainerConsumer.class, args);
		
		
	}
	

}