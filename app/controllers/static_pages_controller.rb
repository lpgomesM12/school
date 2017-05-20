class StaticPagesController < ApplicationController
  def home
    @courses = Course.all
    @students = Student.all.count
  end
end
