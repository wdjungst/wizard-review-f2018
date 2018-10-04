DEFAULT = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png'

class DefaultImageToUsers < ActiveRecord::Migration[5.2]
  def up
    change_column :users, :image, :string, default: DEFAULT
    User.where(image: nil).update_all(image: DEFAULT)
  end

  def down
    change_column :users, :image, :string, default: nil
    User.where(image: DEFAULT).update_all(image: nil)
  end
end
