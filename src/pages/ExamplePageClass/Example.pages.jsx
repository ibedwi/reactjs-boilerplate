/**
 * This is example page using React Component
 */
import React from 'react';

class ExamplePage extends React.Component {

  constructor(props){
    super(props);
  
    this.state = {
      // Error Handling
      hasError: false
  }
  
    // Function binding
    // this.functionName = this.functionName.bind(this)
  }
  
  /*
  ========================================================
  REACT LIFECYCLE
  ========================================================
  */
  //static getDerivedStateFromProps(nextProps, prevState) { 
  //}
  
  componentDidMount() {
  }
  
  //shouldComponentUpdate(nextProps, nextState) {
  //}
  
  //getSnapshotBeforeUpdate(prevProps, prevState){
  //}
  
  componentDidUpdate(prevProps, prevState) {
  }
  
  componentWillUnmount() {
  }
  
  //static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    //console.log(`Error log from getDerivedStateFromError: error`);
    //return { hasError: true };
  //}
  
  componentDidCatch(error, info) {
    console.log(`Error log from componentDidCatch: error`);
    console.log(info);
  }
  
  /*
  ========================================================
  METHOD - HANDLERS
  ========================================================
  */

  // clickHandlers or eventHandlers like onClickSubmit() or onChangeDescription()

  /*
  ========================================================
  METHOD - DATA FETCHING
  ========================================================
  */

  // data fetching methods for render like getSelectReason() or getFooterContent()

  /*
  ========================================================
  METHOD - OPTIONAL RENDER
  ========================================================
  */

  // optional render methods like renderNavigation() or renderProfilePicture()
  
  render() {
    if (this.state.hasError) {
      // Fallback UI when Error
      // return 
    }
    return (
      <div>
        <h1>This is example page using class</h1>
      </div>
    )
  }
}

export default ExamplePage;