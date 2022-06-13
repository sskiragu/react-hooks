import React, { useEffect, useState } from 'react'
import './App.css'
import Posts from './Posts'
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
            switch (resourceType) {
                case 'posts':
                    return <Posts item={item}/>
                    // break;
            
                default:
                    return "Invalid"
                    // break;
            }
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