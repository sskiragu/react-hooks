import React, { useEffect, useState } from 'react'
import './App.css'
function App() {

    const [data, setData] = useState([])
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    },[resourceType])

    console.log(data);

    const listItem  = data.map(item  => {
            return (
                <tbody key={item.id}>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                </tbody>
            )
        })

  return (
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
       <table>
           <thead>
               <tr>
                   <th>Id</th>
                   <th>Title</th>
                   <th>Body</th>
                   <th colSpan="2">Action</th>
               </tr>
           </thead>
           {listItem}
        </table> 
        {resourceType}
    </div>
  )
}

export default App