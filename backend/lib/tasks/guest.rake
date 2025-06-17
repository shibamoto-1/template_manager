namespace :guest do
  desc "ゲストアカウント定期削除"
  task delete_guest_accounts: :environment do
    guest_users = User.where(provider: "guest")
    if guest_users.present?
      guest_users.destroy_all
      puts "ゲストユーザーを削除しました。"
    else
      puts "現在ゲストユーザーはいません。"
    end
  end

end
