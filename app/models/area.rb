class Area < ApplicationRecord
    validates_presence_of :name, :location
    has_many :comments, dependent: :destroy
end
