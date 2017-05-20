class Student < ApplicationRecord
 validates :name, :register_number, :status, presence: true
  
 enum status: {ativo: 1, inativo: 2}

 def self.search(term)
      where("lower(name)like ?", "%#{term.downcase}%")
  end
  
end
