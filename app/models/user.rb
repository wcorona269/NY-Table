class User < ApplicationRecord
    validates :username, :email, :password_digest, :phone_number, :first_name, :last_name, presence: true
    validates :username, length: { minimum: 5 }
    validates :phone_number, length: {is: 10}
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :reviews
    has_many :reservations
    has_many :saved_restaurants

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(password)
        pass_obj.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.generate_session_token
        self.save!
        self.session_token
    end

    private
    def valid_email
        if !email.include?("@")
            errors.add(:email, "please enter a valid email")
        end
    end
end
