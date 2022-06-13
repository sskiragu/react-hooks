import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => setData(json))
    },[data])

    const listItem = data.map(item => {
      return (
        <tbody key={item.id}>
          <tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
        </tbody>
      )
    })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
          {listItem}
      </table>
    </div>
  )
}

export default App