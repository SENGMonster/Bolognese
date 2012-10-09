require 'test_helper'

class SeminarControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get detail" do
    get :detail
    assert_response :success
  end

  test "should get booking" do
    get :booking
    assert_response :success
  end

end
