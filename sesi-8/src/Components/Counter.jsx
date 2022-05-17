import React from 'react';
import style from './Counter.module.css'

const Counter = () => {
    return (
        <div>
            <div className={style.title}>0</div>
            <div>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}

export default Counter