import axios from 'axios'
import React,{useState} from 'react'

function ImageUpload  ()  {
    const [image, setImage] = useState(' ')
    function handlerImage (e){
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
     function handleApi(){
      const formData = new FormData()
      formData.append('image', image)
      axios.post('url', FormData).then((res) =>{
        console.log(res)
      })
     }
  return (
    <div>
       <input type="file" name='file' onChange={handlerImage} />
       <button onClick={handleApi}>Submit</button>
    </div>
  )
}

export default ImageUpload

