class TemplatesController < ApplicationController
  before_action :authenticate_api_v1_user!

  def index
    @templates = current_api_v1_user.templates
    render json: @templates
  end

  def create
    Template.create(template_params)
    head :created
  end

  def update
    template = current_api_v1_user.templates.find(params[:id])
    template.update(template_params)
    head :ok
  end

  def destroy
    template = current_api_v1_user.templates.find(params[:id])
    if template.nil?
      head :not_found
    else
      template.destroy
      head :ok
    end
  end

  private
  def template_params
    params.require(:template).permit(:title, :body, :category_id).merge(user_id: current_api_v1_user.id)
  end

end
