class SessionsController < Devise::SessionsController
  def create 
    resource = User.find_for_database_authentication(email: params[:user][:email])
    if resource
      if resource.valid_password?(params[:user][:password])
        self.resource=warden.authenticate!(auth_options)
        sign_in(resource_name, resource)
        resource.auth_token=SecureRandom.uuid.gsub(/\-/, '')
        resource.save
        return render json: resource
      end
    end
    
    render json: {error: "wrong email or password"}, status: 401
  end
end
