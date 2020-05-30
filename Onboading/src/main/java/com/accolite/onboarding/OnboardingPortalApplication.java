package com.accolite.onboarding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
//import org.springframework.boot.autoconfigure.domain.EntityScan;
//import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


//@EnableJpaRepositories(basePackages="src/main/java/repository")
////@ComponentScan(basePackages = {"src/main/java/resource"})
////@EntityScan("src/main/java/model")
@SpringBootApplication
@ComponentScan(basePackages = {"resource"})
@EntityScan("model")
@EnableJpaRepositories("repository")
public class OnboardingPortalApplication {

	public static void main(String[] args) {
		SpringApplication.run(OnboardingPortalApplication.class, args);
	}

}
