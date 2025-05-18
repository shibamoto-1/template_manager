class Api::V1::GuestSessionsController < ApplicationController
  def create
    @resource = User.create!(
      email: "guest_#{SecureRandom.hex(4)}@example.com",
      password: SecureRandom.hex(10),
    )

    category_1 = @resource.categories.create!(name: "サンプル")
    category_2 = @resource.categories.create!(name: "AA")

    template_1 = @resource.templates.create!(
      title: "テンプレート1",
      body: "## サンプルです\n\n### リスト\n\n- ",
      category: category_1
    )
    template_2 = @resource.templates.create!(
      title: "ハート",
      body: "   ｡ﾟﾟ･｡･ﾟﾟ。\n   ﾟ。　 　｡ﾟ\n   　ﾟ･｡･ﾟ",
      category: category_2
    )
    template_3 = @resource.templates.create!(
      title: "雨",
      body: "、ヽ｀、ヽ｀｀｀、ヽ｀｀、ヽ｀、ヽ｀ヽ｀、、ヽ｀ヽ｀、ヽ｀、ヽ｀\n｀、ヽ｀ヽ｀、、ヽ｀ヽ｀、ヽ(ノ；Д；)ノ ｀、、ヽ｀ヽ｀、ヽ｀｀、\n｀ヽ｀、ヽ｀、ヽ｀｀、ヽ｀、ヽ｀ヽ｀、、ヽ｀ヽヽ｀、ヽ｀｀、ヽ｀\n",
      category: category_2
    )

    render json: { token: @resource.create_new_auth_token}
  end
end
