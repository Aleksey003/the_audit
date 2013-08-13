class AuditsController < ApplicationController
	respond_to :json

  def index
  	@audits = Audit.all
  	respond_with @audits
  end

  def show
  	@audit =  Audit.find params[:id]
  	respond_with @audit
  end

  def admin
  end

end
