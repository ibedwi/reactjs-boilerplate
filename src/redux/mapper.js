/**
 * This file contains mapping of actions and reducers
 */
import { bindActionCreators } from 'redux';
import * as exampleActions from './actions/exampleAction.action';

export function mapStateToProps(state) {
  return {
    global: state
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign(
        {}, {
          ...exampleActions, 
        }), 
        dispatch
  )}
}