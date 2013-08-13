Rails.application.routes.draw do

	match '/audit' => "audits#admin"
	resources :audits

end
