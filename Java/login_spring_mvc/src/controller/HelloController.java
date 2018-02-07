package controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

public class HelloController implements Controller {
	 
	ModelAndView mav;
	@Override
	public ModelAndView handleRequest(HttpServletRequest req, HttpServletResponse res) throws Exception {
		
		String name=req.getParameter("user");
		String pass=req.getParameter("pass");
		
		Map m=new HashMap();
		
		m.put("msg", "HelloUser...."+name);
		m.put("msg1", "HelloUser: "+name+"  Sorry, username or password error....");
		
		ModelAndView mav=new ModelAndView("success",m);
		
		if(pass.equals("admin")){  
	        
	        return new ModelAndView("success",m);
	        }  
	        else{  
	            return new ModelAndView("errorpage",m);  
	        }  
		
	}

}
