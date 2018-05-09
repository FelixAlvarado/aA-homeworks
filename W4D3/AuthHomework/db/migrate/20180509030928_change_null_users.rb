class ChangeNullUsers < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :username, false
    change_column_null :users, :password_digest, false
    change_column_null :users, :session_token, false 
  end
end
