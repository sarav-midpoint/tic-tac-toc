import { useEffect } from 'react';
import axios from 'axios';

const NewPage = () => {

    let value = [
        {
          name: "slk",
          age: 20,
          role: "developer"
        },
        {
          name: "slk",
          age: 20,
          role: "developer"
        },
    ]
    useEffect(() => {
      async function apiHandler() {
          const response = value
          console.log("Response"+response.data);
      }
        apiHandler()
      }, [])

   return (
    <>
      <h1>New Page Loaded</h1>
    </>
   )
}

export default NewPage;