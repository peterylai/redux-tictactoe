import expect from 'expect'
import * as actions from '../../app/actions'

describe('tic tac toe actions', () => {
  it('markCell should create MARK_CELL action', () => {
    expect(actions.markCell(1)).toEqual({
      type: 'MARK_CELL',
      index: 1,
    })
  })

  it('reset should create RESET action', () => {
    expect(actions.reset()).toEqual({
      type: 'RESET',
    })
  })
})
