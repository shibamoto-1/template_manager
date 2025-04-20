class TemplatesController < ApplicationController
  def index
    @templates = Template.all
    render json: @templates
  end

  def create
    Template.create(template_params)
    head :created
  end

  def update
  end

  def destroy
  end

  private
  def template_params
    params.permit(:title, :body, :genre_id)
  end
end
