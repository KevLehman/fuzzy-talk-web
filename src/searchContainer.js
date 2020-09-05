import React, { useEffect } from 'react';

export function SearchField() {
  const [input, setInput] = React.useState('')
  const [answer, setAnswer] = React.useState([])
  const url = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
      if (input.length >= 3) {
        fetch(url)
          .then(r => r.json())
          .then(setAnswer)
      }
  }, [input])

  return (
    <div >
      <input className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text" onChange={(e) => setInput(e.target.value)} value={input}></input> 
      <ul>
        {answer.map(e => (
          <li key={e.id}>{JSON.stringify(e.name)}</li>
        ))}
      </ul>
    </div>
  )

}