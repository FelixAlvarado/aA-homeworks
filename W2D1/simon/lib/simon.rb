class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
    take_turn
    end
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless @game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts "Puts in the color sequences! Seperate each color with a space!"
    input = gets.chomp.downcase.split
    @game_over = true if @seq != input
  end

  def add_random_color
    @seq << COLORS.sample
    puts "Here is the sequences!"
    p @seq
  end

  def round_success_message
    puts "Yay! You got the sequences right!!!"
  end

  def game_over_message
    puts "You got the sequence wrong!!!"
    puts "But lets play again!!!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end

if __FILE__ == $PROGRAM_NAME
a = Simon.new
while a.sequence_length == 1
a.play
end
end
