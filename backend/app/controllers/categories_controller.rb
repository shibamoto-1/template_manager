class CategoriesController < ApplicationController
  before_action :authenticate_user_with_cookie!

  def update
    category = current_api_v1_user.categories.find(params[:id])
    category.update!(category_params)
    head :ok
  end

  def destroy
    category = current_api_v1_user.categories.find(params[:id])
    category.destroy
    head :ok
  end

  private
  def category_params
    params.permit(:name)
  end
end
