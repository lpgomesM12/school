class Classroom < ApplicationRecord
  belongs_to :student
  belongs_to :course

  validates_uniqueness_of :student_id, scope: :course_id, :message=>"O aluno já está matriculado nesse curso"

end
