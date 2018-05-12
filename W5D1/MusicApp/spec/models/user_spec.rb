
require 'spec_helper'

describe User do
  subject(:user) do
    FactoryBot.build(:user,
      email: "f@yahoo.com",
      password: "password")
  end

     it { should validate_presence_of(:email) }

     it { should validate_presence_of(:password_digest) }

     it { should validate_length_of(:password).is_at_least(6) }

     describe "#is_password?" do
         it "proves that given pass word is the right password" do
           expect(user.is_password?("password")).to be true
         end

    describe "#reset_session_token!" do
         it "changes user session token"do
          token = user.session_token
          user.reset_session_token!
          expect(user.session_token).to_not eq(token)
       end
      end

    describe "::find_by_credentials" do
    it "returns nil if user not found" do
      expect(User.find_by_credentials("f@yahoo.com", "pass")).to eq(nil)
    end
end
