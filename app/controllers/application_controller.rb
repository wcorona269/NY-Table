class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    # Reuse the user's current token so signing in on one device (or as the
    # shared guest account) doesn't sign out every other session. Logging out
    # rotates the token, which ends all sessions for that user.
    def login(user)
        user.reset_session_token! if user.session_token.blank?
        session[:session_token] = user.session_token
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        current_user = nil
    end

    def require_logged_in
        unless logged_in?
            render json: ['You must be logged in to do that'], status: 401
        end
    end
end
