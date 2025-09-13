export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}

const updateLocalStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const { type: actionType, payload: actionPayload} = action
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const { id } = actionPayload
            
            const productInCartIndex = state.findIndex(item => item.id === id)

            if (productInCartIndex >= 0) {
                const newState = state.map(item => {
                    if (item.id === id) {
                        return {
                            ...item, cantidad: item.cantidad + 1
                        }
                    }
                    return item
                })
                updateLocalStorage(newState)
                return newState
            }
            const newState = [
                ...state, {...actionPayload, cantidad: 1}
            ]
            return newState
        }
        
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const { id } = actionPayload
            const newState = state.map(item => {
                return item.id === id ?
                    {...item, cantidad: item.cantidad - 1}
                    : item
            }).filter(item => item.cantidad >= 1)
            updateLocalStorage(newState)
            return newState
        }

        case CART_ACTION_TYPES.CLEAR_CART: {
            updateLocalStorage([])
            return []
        }
    }
    return state
}