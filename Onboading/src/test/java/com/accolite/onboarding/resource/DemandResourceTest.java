package com.accolite.onboarding.resource;
import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;

import controller.DemandController;
import controller.LoginController;
import controller.OnboardeeController;
import dao.DemandDao;
import dao.LoginDao;
import dao.OnboardeeDao;
import model.DemandDetails;

@RunWith(SpringRunner.class)
@WebMvcTest(value = {LoginController.class, DemandController.class, OnboardeeController.class})
public class DemandResourceTest {
	@Autowired
	MockMvc mockMvc;
	
	@Autowired
	ObjectMapper objectMapper;
	
	@MockBean
	private LoginDao loginRepo;
	
	@MockBean
	private DemandDao demandRepo;
	
	@MockBean
	private OnboardeeDao onboardeeRepo;

	private List<DemandDetails> list;
	
	@BeforeEach
	void setUp() {
		this.list = new ArrayList<>();
		this.list.add(new DemandDetails("FSD401","INT406","Full Stack Developer","Full-Time","0-1"));
		this.list.add(new DemandDetails("FSD402","INT408","Full Stack Developer","Full-Time","2-3"));
	}
	
	@Test
	public void shouldFetchAllDemandDetail() throws Exception {
		when(demandRepo.findAll()).thenReturn(this.list);
		
		this.mockMvc.perform(get("/demand")).andExpect(status().isOk())
			.andExpect(jsonPath("$.size()", is(list.size())));
	}
	
	
	
}
