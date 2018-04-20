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
  nil
end

def remove(key)
  @my_map = @my_map.reject { |pair| pair[0] == key}
end

def show
  deep_dup(@my_map)
end

private

def deep_dup(arr)
result = []
arr.each do |el|
    if el.is_a?(Array)
      result << deep_dup(el)
    else
      result << el
    end
  end
  result
end

end
