class UsersController < ApplicationController
  before_action :authenticate

  def index
    @users=User.all
    render json: @users, each_serializer: UserSerializer
  end

  def create
    @user=User.create(params.require(:user).permit(:first_name, :last_name, :title))

    if @user.valid?
      render json: @user
    else 
      render json: @user.errors, status: 400
    end
  end
end
