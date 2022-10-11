import React from 'react'
import {useNavigate} from 'react-router-dom';
import StudentsLists from './StudentsLists';
import './Form.css'
import './lists.css'


function Lists() {
  let history=useNavigate();
  history('/');

  return (
    <div className='background'>
    <h1>LISTS</h1>
    <div className='tablecard'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
            <th>Email</th>
            <th>RollNo</th>
          </tr>

        </thead>
        <tbody>
          {
            StudentsLists.map((item)=>{
              return(
                <tr >
                  <td>{item.First}</td>
                  <td>{item.Second}</td>
                  <td>{item.Third}</td>
                  <td>{item.Fourth}</td>

                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      </div>

    </div>
  )
}

export default Lists;

