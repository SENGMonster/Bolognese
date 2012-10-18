require 'test_helper'

class AttendeesControllerTest < ActionController::TestCase
  setup do
    @attendee = attendees(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:attendees)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create attendee" do
    assert_difference('Attendee.count') do
      post :create, attendee: { birthday: @attendee.birthday, city: @attendee.city, email: @attendee.email, firstname: @attendee.firstname, lastname: @attendee.lastname, plz: @attendee.plz, streetnr: @attendee.streetnr, tel: @attendee.tel }
    end

    assert_redirected_to attendee_path(assigns(:attendee))
  end

  test "should show attendee" do
    get :show, id: @attendee
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @attendee
    assert_response :success
  end

  test "should update attendee" do
    put :update, id: @attendee, attendee: { birthday: @attendee.birthday, city: @attendee.city, email: @attendee.email, firstname: @attendee.firstname, lastname: @attendee.lastname, plz: @attendee.plz, streetnr: @attendee.streetnr, tel: @attendee.tel }
    assert_redirected_to attendee_path(assigns(:attendee))
  end

  test "should destroy attendee" do
    assert_difference('Attendee.count', -1) do
      delete :destroy, id: @attendee
    end

    assert_redirected_to attendees_path
  end
end
