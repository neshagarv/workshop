package com.roshith.vgsm.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roshith.vgsm.entity.vgsm;
import com.roshith.vgsm.repo.vgsmRepo;



import java.util.List;
@Service
public class vgsmService {

	@Autowired
	private vgsmRepo com;
	public vgsm savedata(vgsm s) {
		return com.save(s);
	}
	public List<vgsm> findall(){
		return com.findAll();
	}
	public void deletedata(int id) {
		com.deleteById(id);
	}
	public vgsm updatedata(vgsm s) {
		return com.saveAndFlush(s);
	}
}
