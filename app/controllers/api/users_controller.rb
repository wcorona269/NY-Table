class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:update]

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])

        unless @user.id == current_user.id
            return render json: ['You can only edit your own account'], status: 403
        end

        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    private
    def user_params
        params.require(:user).permit(:dname, :password, :email, :fname, :lname, :phone)
    end
end
