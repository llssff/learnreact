import React from 'react';

const Input = ({setStart}) => {
    return (
        <div>
            <input onChange={setStart}></input>
            <br/>
            {/*<input onChange={setEnd}></input>*/}
        </div>
    );
}

export default Input;