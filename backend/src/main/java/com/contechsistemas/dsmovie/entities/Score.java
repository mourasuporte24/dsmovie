package com.contechsistemas.dsmovie.entities;


import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="tb_score")
public class Score {
	
	private Double value;
	
	@EmbeddedId
	private ScorePk id = new ScorePk();
	
	
	
	
	
	public Score() {
		
	}
	
	
	public void setMovie(Movie movie) {
		
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}
	
	

	public ScorePk getId() {
		return id;
	}

	public void setId(ScorePk id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}

	

	
	
	
}
