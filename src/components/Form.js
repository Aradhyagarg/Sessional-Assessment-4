import React, { useState } from 'react'
import StudentsLists from './StudentsLists';
import './Form.css';
import { useNavigate } from 'react-router-dom';


function Form() {
    const [Name, setName] = useState('');
    const [Group, setGroup] = useState('');
    const [Email, setEmail] = useState('');
    const [RollNo, setRollNo] = useState('');

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let First = Name, Second = Group, Third = Email, Fourth = RollNo;
        StudentsLists.push({ First, Second, Third, Fourth });
        history('/lists');


    }

    return (
        <div>
            <h1>STUDENTS LISTS</h1>
            <form className='container' onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text"
                    placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <br />
                <label>Group</label><br />
                <input type="text"
                    placeholder='Enter Group'
                    onChange={(e) => setGroup(e.target.value)}
                    required>
                </input>
                <br />
                <label >Email</label><br />
                <input type="email"
                    placeholder='Enter email'
                    onChange={(e) => setEmail(e.target.value)}
                    required>
                </input>
                <br />
                <label >RollNo</label><br />
                <input type="number"
                    placeholder='Enter number'
                    onChange={(e) => setRollNo(e.target.value)}
                    required>
                </input>
                <br />
                 
                <input className='btn'
                    type="submit"
                />

            </form>
        </div>
    )
}

export default Form;
