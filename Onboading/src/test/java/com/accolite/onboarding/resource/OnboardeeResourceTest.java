package com.accolite.onboarding.resource;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
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

import model.OnboardeeDetails;
import repository.DemandRepository;
import repository.LoginRepository;
import repository.OnboardeeRepository;
import resource.DemandResource;
import resource.LoginResource;
import resource.OnboardeeResource;

@RunWith(SpringRunner.class)
@WebMvcTest(value = { LoginResource.class, DemandResource.class, OnboardeeResource.class })
public class OnboardeeResourceTest {

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

	private OnboardeeDetails onboardeeDetails;
	// private OnboardeeDetails updatedDetails;
	private List<OnboardeeDetails> list;

	@BeforeEach
	void setUp() {
		this.list = new ArrayList<>();
		this.list.add(new OnboardeeDetails(0, "FSD402", "Pawan", "9074176787", "demo@gmail.com", "INT406", "2020-06-07",
				"2020-06-07", "FSD401", "Mumbai", "Done", "Done", "Done"));
		this.list.add(new OnboardeeDetails(1, "FSD402", "Pawan", "9074176787", "demo@gmail.com", "INT406", "2020-06-07",
				"2020-06-07", "FSD401", "Mumbai", "Done", "Done", "Done"));
		this.onboardeeDetails = new OnboardeeDetails(1, "FSD402", "Pawan", "9074176787", "demo@gmail.com", "INT406",
				"2020-06-07", "2020-06-07", "FSD401", "Mumbai", "Done", "Done", "Done");
	}

	@Test
	void shouldSaveOnboardeeDetails() throws Exception {

		when(onboardeeRepo.save(this.onboardeeDetails)).thenReturn(this.onboardeeDetails);

		this.mockMvc.perform(put("/OnboardeeDetails").contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(this.onboardeeDetails))).andExpect(status().isOk());
	}

	@Test
	void shouldFetchAllOnboardeeDetails() throws Exception {

		when(onboardeeRepo.findAll()).thenReturn(list);

		this.mockMvc.perform(get("/onboardeeList")).andExpect(status().isOk())
				.andExpect(jsonPath("$.size()", is(list.size())));
	}

	@SuppressWarnings("unchecked")
	@Test
	public void shouldFetchAOnboardeeDetails() throws Exception {
		when(onboardeeRepo.findById(1)).thenReturn(Optional.of(this.onboardeeDetails), Optional.empty());

		this.mockMvc.perform(get("/view/{id}", 1)).andExpect(status().isOk());
		// .andExpect(jsonPath("$.name", is("Pawan")));
	}

	@Test
	void shouldUpdateOnboardeeDetails() throws Exception {

		this.onboardeeDetails = new OnboardeeDetails(1, "FSD402", "Pawan", "9074176787", "demo@gmail.com", "INT406",
				"2020-06-07", "2020-06-07", "FSD401", "Mumbai", "Done", "Done", "Done");
//		this.updatedDetails = new OnboardeeDetails(1, "FSD402","Balpreet","9074176787","demo@gmail.com","INT406",
//				"2020-06-07","2020-06-07","FSD401","Mumbai","Done", "Done", "Done");
		when(onboardeeRepo.save(this.onboardeeDetails)).thenReturn(null);

		this.mockMvc.perform(post("/edit/{id}", 1).contentType(MediaType.APPLICATION_JSON)
				.content(objectMapper.writeValueAsString(this.onboardeeDetails))).andExpect(status().isOk());
	}

	@Test
	public void shouldFetchCountOnLocation() throws Exception {
		when(onboardeeRepo.countBylocation("Mumbai")).thenReturn(1);

		this.mockMvc.perform(get("/count/{location}", "Mumbai")).andExpect(status().isOk());
	}

}
