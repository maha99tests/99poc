class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up) do |u|
        u.permit :email, :first_name, :last_name, :title, :password, :password_confirmation
      end
      devise_parameter_sanitizer.permit(:sign_in) do |u|
        u.permit :email, :password
      end
    end

    def authenticate
      token=request.headers["HTTP_AUTHORIZATION"]
      if token
        user=User.find_by(auth_token: token)
        if user
          @user=user
        end
      end

      if not @user
        return render json: {error: "Invalid credentials"}, status: 401
      end
    end
end
