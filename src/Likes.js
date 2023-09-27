import React from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from './redux/actions'

function Likes(props) {
  return (
    <div className='button-controls'>
      <button onClick={props.onIncrease}>❤️ {props.likes}</button>
      <button onClick={props.onDecrease}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state) {
  const { likesReducer } = state
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Likes)