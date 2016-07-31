export const markCell = (index) => ({
  type: 'MARK_CELL',
  index,
});

export const reset = () => ({
  type: 'RESET',
});
