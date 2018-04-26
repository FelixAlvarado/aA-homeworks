def sluggish_octopus(arr)
  longest = arr[0]
  (0...arr.length - 1).each do |idx|
    (idx + 1...arr.length).each do |idx2|
      longest = arr[idx] if arr[idx].length > longest.length && arr[idx].length > arr[idx2].length
        longest = arr[idx2] if arr[idx2].length > longest.length && arr[idx2].length > arr[idx].length
    end
  end
  longest
end

# test 1
# arr = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
# p sluggish_octopus(arr)

  def merge_sort(arr)
    return arr if arr.length <= 1
    mid = arr.length / 2
    sorted_left = merge_sort(arr.take(mid))
    sorted_right = merge_sort(arr.drop(mid))
     merge(sorted_left, sorted_right)
  end

  def merge(left, right)
    merged = []
    until left.empty? || right.empty?
      if left.first.length < right.first.length
        merged << left.shift
      else
        merged << right.shift
      end
    end
    merged.concat(left)
    merged.concat(right)
    merged
  end

  def dominant_octopus(arr)
    merge_sort(arr)[-1]
  end
#test 2
# p dominant_octopus(arr)

def clever_octopus(arr)
  longest = arr[0]
  (1...arr.length).each do |idx|
    longest = arr[idx] if longest.length < arr[idx].length
  end
  longest
end

# test 3
# p clever_octopus(arr)

# tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(str,arr)
  arr.each_with_index do |el,idx|
    return idx if str == el
  end
end

  # test 4
  # p slow_dance('up',tiles_array)

  def constant_dance(str,arr)
    return arr.find_index(str)
  end

# test 5
# p constant_dance('right', tiles_array)
