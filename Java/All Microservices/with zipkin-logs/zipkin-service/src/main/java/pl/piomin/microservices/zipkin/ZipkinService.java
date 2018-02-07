package pl.piomin.microservices.zipkin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import zipkin.server.EnableZipkinServer;

@SpringBootApplication
@EnableZipkinServer
public class ZipkinService {

	public static void main(String[] args) {
		SpringApplication.run(ZipkinService.class, args);
	}

}
