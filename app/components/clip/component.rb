# frozen_string_literal: true

class Clip::Component < ViewComponent::Base

  def initialize(movie_title:, movie_director:, movie_title_guessed:, movie_director_guessed:)
    @movie_title    = movie_title
    @movie_director = movie_director

    @movie_title_guessed    = movie_title_guessed
    @movie_director_guessed = movie_director_guessed
  end

  def setup_classes
    {
      container:              true,
      movie_title_guessed:    @movie_title_guessed,
      movie_director_guessed: @movie_director_guessed
    }
  end
end
