package com.narendranath;

import java.io.IOException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.feign.EnableFeignClients;
import org.springframework.web.client.RestClientException;



@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
public class ContainerConsumer {

	public static void main(String[] args) throws RestClientException, IOException {
		
		SpringApplication.run(ContainerConsumer.class, args);	
		
	}
	

}