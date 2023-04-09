import React, {useEffect, useState} from "react";




const ListTodos =()=>{
    return(
        <div className="mt-3">
<table className="table">
    <thead>
      <tr>
        <th>Description</th>
        <th >Edit</th>
        <th >Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
    </tbody>
  </table>
        </div>
    )
}

export default ListTodos;