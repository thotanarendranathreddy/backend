package com.narendranath;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;


@RestController
public class ContainerController {
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ContainerProducerClient cpClient;

	@RequestMapping(value = "/container", method = RequestMethod.GET,headers="Accept=application/json")
	public Container firstPage() throws RestClientException, IOException{
		LOGGER.debug("check data",cpClient.getData());
		return cpClient.getData();
		
	}
	
}