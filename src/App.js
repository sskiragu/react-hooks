import React, { useEffect, useState } from 'react'
import './App.css'
import Comments from './Comments'
import Posts from './Posts'
import Users from './Users'
function App() {

    const [data, setData] = useState([])
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    },[resourceType])

    const resourceHeader = () => {
        let headerVal;
        switch (resourceType) {
            case 'posts':
                headerVal = 
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                    <th colSpan='2'>Action</th>
                                </tr>
                            </thead>
                break;
            case 'users':
                headerVal = 
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th colSpan='2'>Action</th>
                                </tr>
                            </thead>
                break;
            case 'comments':
                headerVal = 
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Body</th>
                                    <th colSpan='2'>Action</th>
                                </tr>
                            </thead>
                break;
        
            default:
                headerVal = "Invalid"
                break;
        }
        return headerVal;
    }

    const listItem  = data.map(item  => {
        let res;
            switch (resourceType) {
                case 'posts':
                    res = <Posts item={item}/>
                    break;
                case 'users':
                    res = <Users item={item}/>
                    break;
                case 'comments':
                    res = <Comments item={item}/>
                    break;
                default:
                    res = "Invalid"
                    break;
            }
            return res;
        })

  return (
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
       <table>
            {resourceHeader()}
           {listItem}
        </table> 
        {resourceType}
    </div>
  )
}

export default App