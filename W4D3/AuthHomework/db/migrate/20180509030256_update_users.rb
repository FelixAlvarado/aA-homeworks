class UpdateUsers < ActiveRecord::Migration[5.1]
  def change
    add_index :users, :username, unique: true
    add_index :users, :password_digest
    add_index :users, :session_token
  end
end
