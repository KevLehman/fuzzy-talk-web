import React, { useEffect } from 'react';

export function SearchField(props) {
  const [input, setInput] = React.useState('')
  const [answer, setAnswer] = React.useState([])

  useEffect(() => {
      if (input.length >= 3) {
        fetch(`${props.url}?name=${input}`)
          .then(r => r.json())
          .then(setAnswer)
      }
  }, [props.url, input])

  return (
    <div >
      <input className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" type="text" onChange={(e) => setInput(e.target.value)} value={input}></input> 
      <ul className="mt-4">
        {answer.map((e, id) => (
          <li className="mt-1 mb-1 bg-white rounded" key={id}>{JSON.stringify(e.name)}</li>
        ))}
      </ul>
    </div>
  )

}