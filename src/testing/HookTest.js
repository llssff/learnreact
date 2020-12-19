import React, {useState, useEffect} from 'react';

import {useInput} from "./UseInput";

function HookEx(props) {
    const {value:startTime , bind:bindStartTime , reset:resetStartTime} = useInput('');
    const {value:endTime, bind:bindEndTime, reset:resetEndTime } = useInput('');
    const {value:date, bind:bindDate, reset:resetDate } = useInput('');


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`submitting ${startTime} ${endTime} ${date}` );
        resetDate();
        resetStartTime();
        resetEndTime();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Date <input type="text" {...bindDate} />
                </label>
                <br/>


                <label>
                    Start Time <input type= "text" {...bindStartTime} />
                </label>
                <br/>

                <label>
                    End Time <input type= "text" {...bindEndTime} />
                </label>
            </form>
            <div>
                {date}
                <br/>
                <br/>
                {startTime}
                <br/>
                <br/>
                {endTime}
            </div>
        </div>
    )

}

export default HookEx;



