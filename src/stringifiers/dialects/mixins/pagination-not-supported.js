function throwErr() {
  throw new Error('This type of pagination not supported on this dialect')
}

module.exports = {
  throwErr,
  handlePaginationAtRoot: throwErr,
  handleJoinedOneToManyPaginated: throwErr,
  handleBatchedOneToManyPaginated: throwErr,
  handleJoinedManyToManyPaginated: throwErr,
  handleBatchedManyToManyPaginated: throwErr
}
