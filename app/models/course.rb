class Course < ApplicationRecord
 validates :name, :description, :status, presence: true
 has_many :classrooms, dependent: :destroy
 
 enum status: {ativo: 1, inativo: 2}

  def self.search(term)
      where("lower(name)like ?", "%#{term.downcase}%")
  end
end
