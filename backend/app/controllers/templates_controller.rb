class TemplatesController < ApplicationController
  before_action :authenticate_user_with_cookie!

  def index
    templates = current_user.templates
    categories = current_user.categories
    render json: { templates: templates, categories: categories }
  end

  def create
    category = Category.find_or_create_by(category_params)
    template = Template.new(template_params)
    template.category = category

    if template.save
      head :created
    else
      render json: { errors: template.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    template = current_user.templates.find(params[:id])
    template.update(template_params)
    head :ok
  end

  def destroy
    template = current_user.templates.find(params[:id])
    if template.nil?
      head :not_found
    else
      template.destroy
      head :ok
    end
  end

  private
  def template_params
    params.require(:template).permit(:title, :body).merge(user_id: current_user.id)
  end

  def category_params
    params.permit(:name).merge(user_id: current_user.id)
  end

end
