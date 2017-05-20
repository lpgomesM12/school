Rails.application.routes.draw do
  
  root 'static_pages#home'
  get 'static_pages/home'

  resources :classrooms
  resources :courses
  resources :students

  get 'seachstudents' => 'students#search_student'
  get 'searchcourse' => 'courses#search_course'

end
