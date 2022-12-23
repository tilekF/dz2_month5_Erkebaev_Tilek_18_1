const initialState = {
    number1: '',
    number2: '',
    result: ''
}

export default function reducer (state= initialState, action) {
    if(action.type === "VALUE1") {
        return {...state, number1: action.payload}
    }else if(action.type === "VALUE2") {
        return {...state, number2: action.payload}
    } else if (action.type === "PLUS") {
        return {...state, result: state.number1!==0 && state.number2 !==0? parseInt(state.number1) + parseInt(state.number2): alert('Введите число'),number1:'',number2:''}
    } else if (action.type === "MINUS") {
        return {...state, result: state.number1!==0 && state.number2 !==0? parseInt(state.number1) - parseInt(state.number2): alert('Введите число'),number1:'',number2:''}
    } else if (action.type === "MULTIPLY") {
        return {...state, result: state.number1!==0 && state.number2 !==0? parseInt(state.number1) * parseInt(state.number2): alert('Введите число'),number1:'',number2:''}
    } else if (action.type === "DIVISION") {
        return {...state, result: state.number1!==0 && state.number2 !==0? parseInt(state.number1) / parseInt(state.number2): alert('Введите число'),number1:'',number2:''}
    }


    return state
}