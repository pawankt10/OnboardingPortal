package com.accolite.onboarding.resource;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import model.LoginDetails;
import repository.DemandRepository;
import repository.LoginRepository;
import repository.OnboardeeRepository;
import resource.DemandResource;
import resource.LoginResource;
import resource.OnboardeeResource;

@RunWith(SpringRunner.class)
@WebMvcTest(value = {LoginResource.class, DemandResource.class, OnboardeeResource.class})
public class LoginResourceTest {
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	ObjectMapper objectMapper;
	
	@MockBean
	private LoginRepository loginRepo;
	
	@MockBean
	private DemandRepository demandRepo;
	
	@MockBean
	private OnboardeeRepository onboardeeRepo;
	
	private LoginDetails loginDetails;
	private LoginDetails invalidLoginDetails;
	
	@BeforeEach
	void setup() {
		this.loginDetails = new LoginDetails("INT406", "Pawan", "abc", "abc@gmail.com", null, "g123");
		this.invalidLoginDetails = new LoginDetails("INT403", "Balpreet", "def", "abc@gmail.com", null, "g123");
		
	}
	
	@Test
	public void shouldFetchAUserDetail() throws Exception {
		when(loginRepo.findByempID("INT406")).thenReturn(this.loginDetails);
		
		this.mockMvc.perform(get("/home/{id}", "INT406")).andExpect(status().isOk())
			.andExpect(jsonPath("$.name", is("Pawan")));
	}
	
	@Test
	public void shouldFetchGoogleUserDetail() throws Exception {
		when(loginRepo.findBygoogleID("g123")).thenReturn(this.loginDetails);
		
		this.mockMvc.perform(get("/home2/{googleId}", "g123")).andExpect(status().isOk())
			.andExpect(jsonPath("$.name", is("Pawan")));
	}
	
	@SuppressWarnings("unchecked")
	@Test
	public void shouldReturnLoginDetailsIfValid() throws Exception {
		when(loginRepo.findById("INT406")).thenReturn(Optional.of(this.loginDetails), Optional.empty());
		
		this.mockMvc.perform(post("/details").contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(this.loginDetails)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.name", is("Pawan")));
		
		this.mockMvc.perform(post("/details").contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(this.loginDetails)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").doesNotExist());
	}
	
	@Test
	public void shouldReturnLoginDetailsIfPasswordMatch() throws Exception {
		when(loginRepo.findById("INT406")).thenReturn(Optional.of(this.invalidLoginDetails));
		
		this.mockMvc.perform(post("/details").contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(this.loginDetails)))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").doesNotExist());
	}

}
