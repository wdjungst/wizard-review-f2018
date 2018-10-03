# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings

  #User.like_users(7, ['mario'])
  def self.like_users(id, tags)
    return [] if tags.empty?
    select('DISTINCT(users.id), users.name, t.* AS tags, image')
    .joins('INNER JOIN taggings tg ON tg.user_id = users.id
            INNER JOIN tags t ON t.id = tg.tag_id')
    .where('t.name in (?) AND users.id <> ?', tags, id)
  end
end











