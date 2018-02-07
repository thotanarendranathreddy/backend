package com.narendranath;

public class Container {
	
	private int Id;
	private String type;
	private int size;
	private String containerNumber;


//	public Container(int Id,String type,int size,String containerNumber) {
//		this.Id=Id;
//		this.type=type;
//		this.size=size;
//		this.containerNumber=containerNumber;
//		
//	}

	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getContainerNumber() {
		return containerNumber;
	}
	public void setContainerNumber(String containerNumber) {
		this.containerNumber = containerNumber;
	}


}
