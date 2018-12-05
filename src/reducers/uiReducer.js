const uiReducer = (state = {
  comicsCollapsed: true,
  comicsRetrieved: false,
  seriesCollapsed: true,
  seriesRetrieved: false,
  eventsCollapsed: true,
  eventsRetrieved: false
}, action) => {
  switch (action.type) {
    case 'RESET_UI': {
      return {
        ...state,
        comicsCollapsed: true,
        seriesCollapsed: true,
        eventsCollapsed: true
      }
    }
    case 'TOGGLE_COMICS': {
      return {
        ...state,
        comicsCollapsed: action.bool
      }
    }
    case 'TOGGLE_SERIES': {
      return {
        ...state,
        seriesCollapsed: action.bool
      }
    }
    case 'TOGGLE_EVENTS': {
      return {
        ...state,
        eventsCollapsed: action.bool
      }
    }
    default:
      return state;
  }
}

export default uiReducer;
