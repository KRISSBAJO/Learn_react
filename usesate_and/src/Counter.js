import React, {useState} from 'react';
import style from './Counter.module.css';





const Counter = ({count, color}) => {

    const styles = {
        color: color,
        backgroundColor: 'black',
        padding: '10px',
        borderRadius: '5px',
        fontWeight: 'bold',
        fontSize: '1rem',
    }
    

    const [num, setCount] = useState(count);

    const incrementCounter = () => {
        setCount(num + 1 * 12);
    }

    const decrementCounter = () => {
        if (num > 9)
        setCount(num - 9 );
    }
    return <>
       
        <button style={styles} onClick={incrementCounter} >Increase</button>
        <h2 className={style.number}>{num}</h2>
        <button style={styles} onClick={decrementCounter} >Decrease</button>
       
    </>

}

export default Counter;