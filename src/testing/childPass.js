import React, {useState} from 'react';
import Display from './Display';
import Input from './Input';

const ChildPass = () => {
    const [start , setStart] = useState('');
    const [end, setEnd] = useState('');

    return (
        <div>
            <div>
                <Display start={start}/>
            </div>
            <div>
                <Input setStart={setStart}/>
            </div>
        </div>
    );
}

export default ChildPass;