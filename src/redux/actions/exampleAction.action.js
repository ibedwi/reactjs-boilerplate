/**
 * This is the example of redux action
 */
const setExample = ( payload ) => {
  return {
    type: 'SET_EXAMPLE',
    payload
  }
}

export { setExample }