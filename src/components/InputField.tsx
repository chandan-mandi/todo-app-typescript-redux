import React, { useRef } from 'react';
import './styles.css';

interface Props{
    todo: string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void;
}

const InputField : React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <form className='input' 
            onSubmit={(e) => {
                inputRef.current?.blur();
                handleAdd(e);
                }}>
                <input 
                ref={inputRef}
                type="input" 
                placeholder='Enter task' className='input_box'
                onChange={
                    (e) => setTodo(e.target.value)
                }/>
                <button className='input_submit' type='submit'>Go</button>
            </form>
        </div>
    );
};

export default InputField;