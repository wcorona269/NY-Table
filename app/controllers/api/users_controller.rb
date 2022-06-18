class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
        render json: @users
    end
    
    def update
        @user = User.find(params[:id])
    
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
    # def show
    #     @user = User.find(params[:id])
    #     if @user
    #         render :show
    #     else
    #         render json: @user.errors.full_messages, status: 404
    #     end
    # end


    # def destroy
    # end

