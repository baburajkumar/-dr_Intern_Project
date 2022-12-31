import React from "react";
import Table from 'react-bootstrap/Table';
import data from "./db.json";
import OutlineTypesExample from './components/statustag';
import DownUp from './icon';
import './components/NavbarStyles.css';

function Fetchjsondata()
{
return(
        <Table responsive>
              <thead>
                <tr className="n01">              
                  <th>Name</th>
                  <th>Age</th>
                  <th >Previous Appointment</th>
                  <th >Status tag</th>
                  <th>Action</th>       
                </tr>
              </thead>
              <tbody> 
                {
                    data.map( (users, index)=>(
                    <tr key={index}>                 
                  <td>{ users.name}<br></br><small>{users.place}</small></td>
                  <td>{ users.age} / {users.gender}</td>
                  <td>{ users.previous_appointment} </td>
                  <td><OutlineTypesExample/>
                  <div className="dot">
                      <li>
                        {users.critical_on}
                      </li>
                  </div>
                  </td>
                  <td><DownUp/></td>                 
                </tr>
                    ))
                }             
              </tbody>
            </Table>
            
);
}

export default Fetchjsondata;