import { useState } from "react";

import { InputLabel, FormControl, NativeSelect } from '@mui/material';

import BootstrapInput from "../assets/BootStrapInput";



const QuizSelect = ({selected}) => {
    const [type, setType] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
    
        setType(e.target.value);

        localStorage.setItem('username', (e.target.value));
        
        function a() {
            selected(e.target.value)
        };

        a();
    };

   
    return (
        <div className="select-page">
            <div className="form-group">
                <p>Which Quiz will you like to attempt?</p>

                <FormControl variant="standard" >
                    <InputLabel htmlFor="quiz">Quiz type</InputLabel>
                    
                    <NativeSelect
                        id="quiz"
                        value={type}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <option aria-label="None" value=""/>
                        <option value="science">Science</option>
                        <option value="general">General</option>                        
                    </NativeSelect>
                </FormControl>
            </div>
        </div>
    )
};

export default QuizSelect