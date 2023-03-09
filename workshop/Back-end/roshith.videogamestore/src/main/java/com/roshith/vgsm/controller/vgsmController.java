package com.roshith.vgsm.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.roshith.vgsm.entity.vgsm;
import com.roshith.vgsm.service.vgsmService;




@RestController
@CrossOrigin
public class vgsmController {

	@Autowired
	 private vgsmService  cs;
	 
	 @PostMapping("/save")
	 public String savingCompany(@RequestBody vgsm d) {
		  cs.savedata(d);
		  return "saved";
	 }
	 @GetMapping("/findall")
	 public List<vgsm> listing()
	  {
	 	 return cs.findall();
	  }
	 @PutMapping("/updatedata")
	 public String updateCompany(@RequestBody vgsm d) {
		  cs.updatedata(d);
		  return "updated";
	 }
	 @DeleteMapping("/delete{GameId}")
	 public String deleteCompany(@PathVariable("GameId")int GameId) {
		 cs.deletedata(GameId);
		 return "deleted";
	 }
}
