class Board
  attr_accessor :cups

  def self.make_board
    board = Array.new(14) {Array.new([:stone,:stone,:stone,:stone])}
    board[6], board[13] = [[],[]]
    board
  end
  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = place_stones
  end

  def place_stones
    board = Array.new(14) {Array.new([:stone,:stone,:stone,:stone])}
    board[6], board[13] = [[],[]]
    board
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" unless [1,2,3,4,5,7,8,9,10,11,12].include?(start_pos)
  end

  def make_move(start_pos, current_player_name)
    hand = @cups[start_pos]
    @cups[start_pos] = []
    end_pos = 0
    until hand.empty?
      (start_pos + 1..13).each do |idx|
        next if hand.empty?
        next if (idx == 6 && @name2 == current_player_name) || (idx == 13 && @name1 == current_player_name)
        @cups[idx] << hand.pop
        end_pos = idx if hand.empty?
      end
      start_pos = -1 unless hand.empty?
    end
    render
    next_turn(end_pos)
  end

  def next_turn(ending_cup_idx)
    return :switch if @cups[ending_cup_idx].length == 1 && ![6,13].include?(ending_cup_idx)
    return :prompt if [6,13].include?(ending_cup_idx)
    return ending_cup_idx if @cups[ending_cup_idx].length > 1
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0..5).all? {|idx| return false unless @cups[idx].empty?}
    return true
    (7..12).all? {|idx| return false unless @cups[idx].empty?}
    true
  end

  def winner
    case @cups[6].length <=> @cups[13].length
    when -1
      return @name2
    when 0
      return :draw
    when 1
      return @name1
    end 
  end
end
