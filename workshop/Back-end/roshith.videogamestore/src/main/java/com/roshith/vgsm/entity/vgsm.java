package com.roshith.vgsm.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name ="GameDB")

public class vgsm {
	
		@Id
		@Column(name = "Id")
		@GeneratedValue
		private int Id;
		@Column(name = "Title")
		private String Title;
		@Column(name = "Genre")
		private String Genre;
		@Column(name = "Platform")
		private String Platform;
		@Column(name = "Publisher")
		private String Publisher;
		@Column(name = "Price")
		private int Price;
		public int getId() {
			return Id;
		}
		public void setId(int id) {
			Id = id;
		}
		public String getTitle() {
			return Title;
		}
		public void setTitle(String title) {
			Title = title;
		}
		public String getGenre() {
			return Genre;
		}
		public void setGenre(String genre) {
			Genre = genre;
		}
		public String getPlatform() {
			return Platform;
		}
		public void setPlatform(String platform) {
			Platform = platform;
		}
		public String getPublisher() {
			return Publisher;
		}
		public void setPublisher(String publisher) {
			Publisher = publisher;
		}
		public int getPrice() {
			return Price;
		}
		public void setPrice(int price) {
			Price = price;
		}
		public vgsm(int id, String title, String genre, String platform, String publisher, int price) {
			super();
			this.Id = id;
			this.Title = title;
			this.Genre = genre;
			this.Platform = platform;
			this.Publisher = publisher;
			this.Price = price;
		}
		public vgsm() {};	
    }
