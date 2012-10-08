require 'test_helper'

class InfoitemsControllerTest < ActionController::TestCase
  setup do
    @infoitem = infoitems(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:infoitems)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create infoitem" do
    assert_difference('Infoitem.count') do
      post :create, infoitem: { description: @infoitem.description, seminar_id: @infoitem.seminar_id, short_description: @infoitem.short_description, title: @infoitem.title }
    end

    assert_redirected_to infoitem_path(assigns(:infoitem))
  end

  test "should show infoitem" do
    get :show, id: @infoitem
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @infoitem
    assert_response :success
  end

  test "should update infoitem" do
    put :update, id: @infoitem, infoitem: { description: @infoitem.description, seminar_id: @infoitem.seminar_id, short_description: @infoitem.short_description, title: @infoitem.title }
    assert_redirected_to infoitem_path(assigns(:infoitem))
  end

  test "should destroy infoitem" do
    assert_difference('Infoitem.count', -1) do
      delete :destroy, id: @infoitem
    end

    assert_redirected_to infoitems_path
  end
end
