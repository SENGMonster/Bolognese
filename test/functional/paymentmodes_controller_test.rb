require 'test_helper'

class PaymentmodesControllerTest < ActionController::TestCase
  setup do
    @paymentmode = paymentmodes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:paymentmodes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create paymentmode" do
    assert_difference('Paymentmode.count') do
      post :create, paymentmode: { name: @paymentmode.name }
    end

    assert_redirected_to paymentmode_path(assigns(:paymentmode))
  end

  test "should show paymentmode" do
    get :show, id: @paymentmode
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @paymentmode
    assert_response :success
  end

  test "should update paymentmode" do
    put :update, id: @paymentmode, paymentmode: { name: @paymentmode.name }
    assert_redirected_to paymentmode_path(assigns(:paymentmode))
  end

  test "should destroy paymentmode" do
    assert_difference('Paymentmode.count', -1) do
      delete :destroy, id: @paymentmode
    end

    assert_redirected_to paymentmodes_path
  end
end
