class Student < ApplicationRecord
 has_many :classrooms, dependent: :destroy
 validates :name, :register_number, :status, presence: true
 
 enum status: {ativo: 1, inativo: 2}

 def self.search(term)
      where("lower(name)like ?", "%#{term.downcase}%")
  end
  
end
