class BooksController < ApplicationController
  def index
    @books = Book.all
    render :index
  end

  def new
    render :new
  end

  def create
    @books = Book.new(params[:book].permit(:title, :author))
    @books.save!
    redirect_to 'http://localhost:3000/books'
  end

  def destroy
    book = Book.find_by(id: params[:id])
    book.destroy
    redirect_to 'http://localhost:3000/books'
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
