import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Pages () {
    const dispatch = useDispatch()
    let number1 = useSelector(state => state.number1)
    let number2 = useSelector(state => state.number2)
    const result = useSelector(state => state.result)

    const changeInputOne = (event) => {
        dispatch({
            type: "VALUE1",
            payload: event.target.value
        })
    }
    const changeInputTwo = (event) => {
        dispatch({
            type: "VALUE2",
            payload: event.target.value
        })
    }
    const plus = () => {
        dispatch({
            type: "PLUS"
        })
    }
    const minus = () => {
        dispatch({
            type: "MINUS"
        })
    }
    const multiply = () => {
        dispatch({
            type: "MULTIPLY"
        })
    }
    const division = () => {
        dispatch({
            type: "DIVISION"
        })
    }

    return (
        <div className="Pages">
            <h1>{result}</h1>
                <input value={number1} onChange={changeInputOne} type="number" placeholder="number1"/>
                <input value={number2} onChange={changeInputTwo} type="number" placeholder="number2"/>
                <button onClick={plus}>+</button>
                <button onClick={minus}>-</button>
                <button onClick={multiply}>*</button>
                <button onClick={division}>/</button>
        </div>
    );
}

export default Pages;