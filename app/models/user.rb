class User < ApplicationRecord
    validates :email, :password_digest, :phone, :fname, :lname, presence: true
    validates_length_of :phone, is: 10,  message: "Number must be 10 digits"  
    after_initialize :ensure_session_token
    attr_reader :password

    has_many :reviews
    has_many :reservations
    has_many :saved_restaurants

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        pass_obj = BCrypt::Password.new(self.password_digest)
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
