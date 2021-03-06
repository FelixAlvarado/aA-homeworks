class CreateBands < ActiveRecord::Migration[5.1]
  def change
    create_table :bands do |t|
      t.string :name, null: false
      t.timestamp
    end
    add_index :bands, :name
  end
end
