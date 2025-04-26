require "test_helper"

class CategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get destroy" do
    get categories_destroy_url
    assert_response :success
  end
end
