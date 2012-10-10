require 'test_helper'

class PriceclassesControllerTest < ActionController::TestCase
  setup do
    @priceclass = priceclasses(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:priceclasses)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create priceclass" do
    assert_difference('Priceclass.count') do
      post :create, priceclass: { name: @priceclass.name }
    end

    assert_redirected_to priceclass_path(assigns(:priceclass))
  end

  test "should show priceclass" do
    get :show, id: @priceclass
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @priceclass
    assert_response :success
  end

  test "should update priceclass" do
    put :update, id: @priceclass, priceclass: { name: @priceclass.name }
    assert_redirected_to priceclass_path(assigns(:priceclass))
  end

  test "should destroy priceclass" do
    assert_difference('Priceclass.count', -1) do
      delete :destroy, id: @priceclass
    end

    assert_redirected_to priceclasses_path
  end
end
