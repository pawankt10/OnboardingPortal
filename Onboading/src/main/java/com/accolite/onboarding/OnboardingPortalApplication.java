package com.accolite.onboarding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "controller" })
@EntityScan("model")
@EnableJpaRepositories("dao")
public class OnboardingPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnboardingPortalApplication.class, args);
	}

}
