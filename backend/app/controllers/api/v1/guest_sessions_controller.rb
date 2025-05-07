class Api::V1::GuestSessionsController < ApplicationController
  def create
    @resource = User.create!(
      email: "guest_#{SecureRandom.hex(4)}@example.com",
      password: SecureRandom.hex(10),
    )

    category = @resource.categories.create!(name: "demo")
    template = @resource.templates.create!(
      title: "demo",
      body: "## サンプルです\n\n### リスト\n\n- ",
      category: category
    )

    render json: { token: @resource.create_new_auth_token}
  end
end
