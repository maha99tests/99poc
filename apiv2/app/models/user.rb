class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :trackable, :validatable, :confirmable, :lockable
  validates :first_name, :presence => true, :uniqueness => {:scope => :last_name, :message => "First and last name should be unique" }
  validates :last_name, :presence => true
  validates :title, :presence => true, :inclusion => { in: %w(Mr Ms), :message => "Should be Mr or Ms" }
end
