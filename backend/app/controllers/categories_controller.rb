class CategoriesController < ApplicationController
  before_action :authenticate_api_v1_user!

  def destroy
    category = current_api_v1_user.categories.find(params[:id])
    category.destroy
    head :ok
  end
end
