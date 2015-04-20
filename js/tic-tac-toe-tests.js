(function(){
  'use strict';
  describe('Tic Tac Toe', function() {
    it('should return 5 for ["X", "O", "-", "<>", "-", "-", "O", "<>", "-", "-", "X"]', function() {
      var game = ["X", "O", "-", "<>", "-", "-", "O", "<>", "-", "-", "X"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe(5);
    });

    it('should return 8 for ["X", "-", "-", "<>", "X", "O", "-", "<>", "-", "-", "-"]', function() {
      var game = ["X", "-", "-", "<>", "X", "O", "-", "<>", "-", "-", "-"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe(8);
      expect(ticTacToe.winningLetter()).toBe('X');
    });

    it('should return 5 for ["-", "O", "-", "<>", "-", "-", "-", "<>", "X", "O", "X"]', function() {
      var game = ["-", "O", "-", "<>", "-", "-", "-", "<>", "X", "O", "X"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe(5);
      expect(ticTacToe.winningLetter()).toBe('O');
    });

    it('should return 10 for ["X", "-", "-", "<>", "O", "X", "-", "<>", "O", "-", "-"]', function() {
      var game = ["X", "-", "-", "<>", "O", "X", "-", "<>", "-", "-", "-"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe(10);
      expect(ticTacToe.winningLetter()).toBe('X');
    });

    it('should return 2 for ["X", "X", "-", "<>", "O", "O", "X", "<>", "O", "X", "-"]', function() {
      var game = ["X", "X", "-", "<>", "O", "O", "X", "<>", "O", "X", "-"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe(2);
      expect(ticTacToe.winningLetter()).toBe('X');
    });

    it('should return 4 for ["X", "O", "O", "<>", "-", "X", "X", "<>", "X", "O", "O"]', function() {
      var game = ["X", "O", "O", "<>", "-", "X", "X", "<>", "X", "O", "O"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe(4);
      expect(ticTacToe.winningLetter()).toBe('X');
    });

    it('should return INCONCLUSIVE for ["-", "-", "-", "<>", "-", "-", "-", "<>", "-", "-", "-"]', function() {
      var game = ["-", "-", "-", "<>", "-", "-", "-", "<>", "-", "-", "-"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe('INCONCLUSIVE');
      expect(ticTacToe.winningLetter()).toBe('INCONCLUSIVE');
    });

    it('should return INCONCLUSIVE for ["-", "-", "-", "<>", "-", "-", "-", "<>", "X", "O", "X"]', function() {
      var game = ["-", "-", "-", "<>", "-", "-", "-", "<>", "-", "-", "-"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe('INCONCLUSIVE');
      expect(ticTacToe.winningLetter()).toBe('INCONCLUSIVE');
    });

    it('should return INCONCLUSIVE for ["X", "O", "X", "<>", "X", "O", "-", "<>", "O", "X", "O"]', function() {
      var game = ["X", "O", "X", "<>", "X", "O", "-", "<>", "O", "X", "O"];
      var ticTacToe = new TicTacToe(game);
      expect(ticTacToe.winningPos()).toBe('INCONCLUSIVE');
      expect(ticTacToe.winningLetter()).toBe('INCONCLUSIVE');
    });
  });
})();
