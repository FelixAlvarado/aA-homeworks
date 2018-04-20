class Map

def initialize
  @my_map = [[1,2],[3,4], [5,6]]
end

def assign(key,value)
  @my_map = @my_map.reject { |pair| pair[0] == key}
  @my_map << [key,value]
end

def lookup(key)
  @my_map.each {|pair| return pair if pair[0] == key}
end

def remove(key)
  @my_map = @my_map.reject { |pair| pair[0] == key}
end

def show
  @my_map
end

end
