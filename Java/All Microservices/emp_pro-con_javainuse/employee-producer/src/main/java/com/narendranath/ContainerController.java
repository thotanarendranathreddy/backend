package com.narendranath;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;

@RestController
public class ContainerController {
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());
	@RequestMapping(value = "/container", method = RequestMethod.GET,headers="Accept=application/json")
	@HystrixCommand(fallbackMethod = "getDataFallBack")
	
//	public List<Container> firstPage() {
//		List<Container> cnt = new ArrayList<Container>();
//		Container cnt1 = new Container(1,"Dry","SIGT2086356");
//		cnt.add(cnt1);
//		Container cnt2 = new Container(2,"Dry","SIFT2086828");
//		cnt.add(cnt2);
//		Container cnt3 = new Container(3,"Dry","SIHT2083565");
//		cnt.add(cnt3);
//		return cnt;
//	}
	public Container firstPage() {
		LOGGER.info("Inside firstPage");
		Container cnt = new Container();
		cnt.setId(1);
		cnt.setType("DRY");
		cnt.setSize(40);
		cnt.setContainerNumber("SITT2086828");
		
		if(cnt.getType().equalsIgnoreCase("DRY"))
			throw new RuntimeException();
		System.out.println(cnt);
		return cnt;
	}
	
public Container getDataFallBack() {
	    LOGGER.info("Inside fallback");
	    Container cnt = new Container();
		cnt.setId(1);
		cnt.setType(" fallback - DRY");
		cnt.setSize(40);
		cnt.setContainerNumber(" fallback - SITT2086828");

		return cnt;
		
	}

}
