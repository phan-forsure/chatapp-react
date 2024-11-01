import { useEffect, useState } from "react";

export function Data() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
    setData(data)
  }, [])

  return (
    <div className="data">{data[0]}</div>
  )
}

function fetchData() {
  fetch('http://localhost:3000/api')
   .then(response => response.json())
   .catch(error => console.error('Error:', error));
}