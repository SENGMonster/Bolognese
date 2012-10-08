require 'test_helper'

class TerminesControllerTest < ActionController::TestCase
  setup do
    @termine = termines(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:termines)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create termine" do
    assert_difference('Termine.count') do
      post :create, termine: { address_id: @termine.address_id, amount: @termine.amount, end_date: @termine.end_date, seminar_id: @termine.seminar_id, start_date: @termine.start_date }
    end

    assert_redirected_to termine_path(assigns(:termine))
  end

  test "should show termine" do
    get :show, id: @termine
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @termine
    assert_response :success
  end

  test "should update termine" do
    put :update, id: @termine, termine: { address_id: @termine.address_id, amount: @termine.amount, end_date: @termine.end_date, seminar_id: @termine.seminar_id, start_date: @termine.start_date }
    assert_redirected_to termine_path(assigns(:termine))
  end

  test "should destroy termine" do
    assert_difference('Termine.count', -1) do
      delete :destroy, id: @termine
    end

    assert_redirected_to termines_path
  end
end
