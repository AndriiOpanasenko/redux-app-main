import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  COMMENTS_LOAD,
  LOADER_ON,
  LOADER_OFF
} from "./types";

export function increase() {
  return {
    type: INCREMENT
  }
}

export function decrease() {
  return {
    type: DECREMENT
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: {
      text,
      id
    }
  }
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: {
      text,
      id
    }
  }
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id
  }
}

export function loaderOn() {
  return {
    type: LOADER_ON
  }
}

export function loaderOff() {
  return {
    type: LOADER_OFF
  }
}

export function commentsLoad() {
  return async dispatch => {
    dispatch(loaderOn())
    const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    const jsonData = await response.json()

    setTimeout(() => {
      dispatch({
        type: COMMENTS_LOAD,
        data: jsonData
      })
      dispatch(loaderOff())
    }, 2000)
  }
}