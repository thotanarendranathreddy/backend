package com.narendranath;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.LoadBalancerClient;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
@RestController
public class ContainerController {
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@Autowired
	private LoadBalancerClient loadBalancer;
	ResponseEntity<String> response=null;
public void getEmployee() throws RestClientException, IOException {
		
		ServiceInstance serviceInstance=loadBalancer.choose("container-producer");
		
		System.out.println("Uri got through Eureka "+serviceInstance.getUri()); 
		
		String baseUrl=serviceInstance.getUri().toString();
		
		baseUrl=baseUrl+"/container";
		System.out.println("Specific required json data from that Uri "+baseUrl); 
		
		RestTemplate restTemplate = new RestTemplate();
		
		try{
		response=restTemplate.exchange(baseUrl,
				HttpMethod.GET, getHeaders(),String.class);
		}catch (Exception ex)
		{
			System.out.println(ex);
		}
		LOGGER.debug("check2", response.getBody());
		System.out.println(response.getBody());
	}

	private static HttpEntity<?> getHeaders() throws IOException {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		return new HttpEntity<>(headers);
	}
	@RequestMapping(value = "/container", method = RequestMethod.GET,headers="Accept=application/json")
	public String firstPage() throws RestClientException, IOException{
		getEmployee();
		System.out.println(response.getBody()+"\n");
		return response.getBody();
		
	}
	
}