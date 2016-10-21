class RegistrationsController < Devise::RegistrationsController
  clear_respond_to
  respond_to :json
  def create
    build_resource(sign_up_params)
    resource.save
    if resource.persisted?
      puts "resource persisted"
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
      else
        expire_data_after_sign_in!
      end
      render json: resource
    else
      puts "resource NOT persisted"
      clean_up_passwords resource
      set_minimum_password_length
      render json: {"errors":resource.errors}, status: 422
    end
  end
end
