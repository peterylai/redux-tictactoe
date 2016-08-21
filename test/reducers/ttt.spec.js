import expect from 'expect'
import ttt from '../../app/reducers/index'

describe('ttt reducer', () => {
  describe('initial state', () => {
    it('should handle initial state', () => {
      expect(
        ttt(undefined, {})
      ).toEqual({
          board: new Array(9).fill(null),
          turn: 1,
          winline: [],
          gameOver: false,
      })
    })
  })

  describe('MARK_CELL', () => {
    it('should mark the first cell', () => {
      expect(
        ttt(undefined, {
          type: 'MARK_CELL',
          index: 0,
        })
      ).toEqual({
          board: ['O', null, null,
                  null, null, null,
                  null, null, null],
          turn: 2,
          winline: [],
          gameOver: false,
      })
    })

    it('should alternate markers', () => {
      expect(
        ttt({
          board: ['O', null, null,
                  null, null, null,
                  null, null, null],
          turn: 2,
          winline: [],
          gameOver: false,
        }, {
          type: 'MARK_CELL',
          index: 1,
        })
      ).toEqual({
          board: ['O', 'X', null,
                  null, null, null,
                  null, null, null],
          turn: 3,
          winline: [],
          gameOver: false,
      })
    })

    it('should not allow you to mark a taken cell', () => {
      expect(
        ttt({
          board: ['O', null, null,
                  null, null, null,
                  null, null, null],
          turn: 2,
          winline: [],
          gameOver: false,
        }, {
          type: 'MARK_CELL',
          index: 0,
        })
      ).toEqual({
          board: ['O', null, null,
                  null, null, null,
                  null, null, null],
          turn: 2,
          winline: [],
          gameOver: false,
      })
    })

    it('should register a horizontal win', () => {
      expect(
        ttt({
          board: [null, 'O', 'O',
                  null, 'X', 'X',
                  null, null, null],
          turn: 5,
          winline: [],
          gameOver: false,
        }, {
          type: 'MARK_CELL',
          index: 0,
        })
      ).toEqual({
          board: ['O', 'O', 'O',
                  null, 'X', 'X',
                  null, null, null],
          turn: 6,
          winline: [0, 1, 2],
          gameOver: true,
      })
    })
    it('should register a vertical win', () => {
      expect(
        ttt({
          board: ['X', 'O', 'O',
                  null, 'O', null,
                  'X', null, null],
          turn: 6,
          winline: [],
          gameOver: false,
        }, {
          type: 'MARK_CELL',
          index: 3,
        })
      ).toEqual({
          board: ['X', 'O', 'O',
                  'X', 'O', null,
                  'X', null, null],
          turn: 7,
          winline: [0, 3, 6],
          gameOver: true,
      }) 
    })

    it('should register a diagonal win', () => {
      expect(
        ttt({
          board: ['O', 'X', null,
                  null, 'O', null,
                  'X', null, null],
          turn: 5,
          winline: [],
          gameOver: false,
        }, {
          type: 'MARK_CELL',
          index: 8,
        })
      ).toEqual({
          board: ['O', 'X', null,
                  null, 'O', null,
                  'X', null, 'O'],
          turn: 6,
          winline: [0, 4, 8],
          gameOver: true,
      })
    })

    it('should register a tie', () => {
      expect(
        ttt({
          board: ['O', 'X', 'O',
                  null, 'O', 'X',
                  'X', 'O', 'X'],
          turn: 9,
          winline: [],
          gameOver: false,
        }, {
          type: 'MARK_CELL',
          index: 3,
        })
      ).toEqual({
          board: ['O', 'X', 'O',
                  'O', 'O', 'X',
                  'X', 'O', 'X'],
          turn: 10,
          winline: [],
          gameOver: true,
      })
    })
  })

  describe('RESET', () => {
    it('should reset the game', () => {
      expect(
        ttt({
          board: ['O', 'X', 'O',
                  'O', 'O', 'X',
                  'X', 'O', 'X'],
          turn: 10,
          winline: [],
          gameOver: true,
      }, {
          type: 'RESET',
        })
      ).toEqual({
          board: new Array(9).fill(null),
          turn: 1,
          winline: [],
          gameOver: false,
      })
    })
  })
})