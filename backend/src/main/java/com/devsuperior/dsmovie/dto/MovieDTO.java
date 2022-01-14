package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Movie;

public class MovieDTO {

  private Long id;
  private String title;
  private Double score;
  private Integer count;
  private String image;

  public MovieDTO(Long id, String title, Double score, Integer count, String image) {
    this.setId(id);
    this.setTitle(title);
    this.setScore(score);
    this.setCount(count);
    this.setImage(image);
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public Integer getCount() {
    return count;
  }

  public void setCount(Integer count) {
    this.count = count;
  }

  public Double getScore() {
    return score;
  }

  public void setScore(Double score) {
    this.score = score;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public MovieDTO() {
  }

  public MovieDTO(Movie movie) {
    this.setId(movie.getId());
    this.setTitle(movie.getTitle());
    this.setScore(movie.getScore());
    this.setCount(movie.getCount());
    this.setImage(movie.getImage());
  }
}
