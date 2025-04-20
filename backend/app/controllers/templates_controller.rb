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
    template = Template.find(params[:id])
    template.update(template_params)
    head :ok
  end

  def destroy
  end

  private
  def template_params
    params.permit(:title, :body, :genre_id)
  end
end
