import React , { useState} from 'react'
import avatarDefault from '../img/avatar.jpg';
import axios from 'axios';

export default function Upload() {
    const [avatar, setAvatar] = useState(avatarDefault);
    const onAvatarChange = (e) => {
        const file = e.target.files[0]; // BLOB Object (Binary Large Object)
    
        // use file reader to convert binary file to a file string (data uri)
        const fileReader = new FileReader();
    
        fileReader.readAsDataURL(file);
    
        // when finished we will get result here
        fileReader.onloadend = (e) => {
          const fileDataUriString = fileReader.result
          setAvatar( fileDataUriString )
        };
      }
      // send to backend
  const onSend = async () => {
    const responce = await axios.post('http://localhost:5400/user/upload',
    {
      name:"user image",
      image:avatar
    },
    {
      withCredentials:true, // Include cookies in the request
      headers: {
      "Content-Type": "application/json"
    }}
    );
   

    if(responce.data){
      console.log(responce.data)
    }

    
  }
  return (
    <div className="App">
    <header className="App-header">
      <label htmlFor="file" >
        <img src={ avatar } style={{ width: "100px" }} />
      </label>
      
      <input  id="file" type="file" accept="image/*" 
       
        onChange={ onAvatarChange }
      />
      <button onClick={ onSend }>Send</button>
    </header>
  </div>
  )
}
