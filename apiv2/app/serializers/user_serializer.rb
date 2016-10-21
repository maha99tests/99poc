class UserSerializer < ActiveModel::Serializer
  attributes :id, :title, :first_name, :last_name, :email, :auth_token
end
