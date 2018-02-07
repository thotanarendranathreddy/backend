package com.narendranath;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@FeignClient(name="container-producer")
public interface ContainerProducerClient {
	@RequestMapping(method=RequestMethod.GET, value="/container")
	public Container getData();

}