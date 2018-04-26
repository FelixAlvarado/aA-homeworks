class LRUCache
  def initialize(storage)
    @storage = storage
    @items = []
   end

   def count
     p @items.length
   end

   def add(el)
     if @items.include?(el)
       @items.delete(el)
       @items.unshift(el)
     else
       @items.pop if @items.length == @storage
       @items.unshift(el)
     end
   end

   def show
     p @items
   end

end
