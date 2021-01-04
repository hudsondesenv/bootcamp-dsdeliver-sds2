package com.devsuperior.dsdeliver.dto;

import java.io.Serializable;

import com.devsuperior.dsdeliver.entities.Product;

public class ProductDTO implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private Double prince;
	private String description;
	private String imageUrl;

	public ProductDTO(Long id, String name, Double prince, String description, String imageUrl) {
		this.id = id;
		this.name = name;
		this.prince = prince;
		this.description = description;
		this.imageUrl = imageUrl;
	}

	public ProductDTO(Product entity) {
		this.id = entity.getId();
		this.name = entity.getName();
		this.prince = entity.getPrice();
		this.description = entity.getDescription();
		this.imageUrl = entity.getImageUri();
	}

	public Long getId() { return id; }
	public void setId(Long id) { this.id = id; }

	public String getName() { return name; }
	public void setName(String name) { this.name = name; }

	public Double getPrince() { return prince; }
	public void setPrince(Double prince) { this.prince = prince; }

	public String getDescription() { return description; }
	public void setDescription(String description) { this.description = description; }
	
	public String getImageUrl() { return imageUrl; }
	public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

}
