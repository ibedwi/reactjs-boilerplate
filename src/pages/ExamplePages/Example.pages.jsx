/**
 * This is example page using functional component
 */
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/mapper'

const ExamplePage = (props) => {
  return (
    <div>
      <h1>This is Example Page</h1>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamplePage)