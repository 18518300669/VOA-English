const defaultState = {
    title: '',
    date: '',
    content: '',
}

export default (state = defaultState,action) => {
    switch (action.type) {
        case 'detail/CHANGE_DETAIL':
                return {
                    ...state,
                    title:action.title,
                    date:action.date,
                    content:action.content
                }

        default: return state

    }
}
