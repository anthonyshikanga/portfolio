class ReferencesController < ApplicationController
  before_action :set_reference, only: [:show, :edit, :update, :destroy]

  # GET /references
  # GET /references.json
  def index
    @references = Reference.all.page params[:page]
    render :layout => params['ic-request'].blank?
    end

  # GET /references/1
  # GET /references/1.json
  def show
  end

  # GET /references/new
  def new
    @reference = Reference.new
  end

  # GET /references/1/edit
  def edit
    @reference = Reference.find(params[:id])
    render :layout => params['ic-request'].blank?
  end

  # POST /references
  # POST /references.json
  def create
    @reference = Reference.new(reference_params)

    respond_to do |format|
      if @reference.save
        format.html { redirect_to @reference, notice: 'Reference was successfully created.' }
        format.js
        format.json { render :show, status: :created, location: @reference }
      else
        format.html { render :new }
        format.json { render json: @reference.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /references/1
  # PATCH/PUT /references/1.json
  def update
    respond_to do |format|
      if @reference.update(reference_params)
        flash[:notice] = "Updated Contact"
        render action: :show, :layout => params['ic-request'].blank?
      else
        flash[:error] = 'Could not update contact'
        render action: :edit, :layout => params['ic-request'].blank?
      end
    end
  end

  # DELETE /references/1
  # DELETE /references/1.json
  def destroy
    @reference.destroy
    respond_to do |format|
      format.html { redirect_to references_url, notice: 'Reference was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reference
      @reference = Reference.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reference_params
      params.require(:reference).permit(:author, :content)
    end
end
