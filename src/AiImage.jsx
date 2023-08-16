import React, { useState } from 'react';
import photo from "./assets/sourabh.jpeg"
function ImageFetcher() {
//   const [imageUrl, setImageUrl] = useState('');
  const [imageData, setImageData] = useState(null);
const [loading,setLoading] = useState(false)


const handleFetchImage = async () =>{
    const inputElement = document.getElementById('fileInput'); 
const photo = inputElement.files[0];

const form = new FormData();
form.append('prompt', 'in church')
form.append('image_file', photo);
   


 await fetch('https://clipdrop-api.co/replace-background/v1', {
  method: 'POST',
  headers: {
    'x-api-key': import.meta.env.API_KEY,
  },
  body: form,
})
  .then(response => response.arrayBuffer())
  .then(buffer => {
    console.log(buffer)
    const blob = new Blob([buffer], { type: 'image/jpeg' }); 
    const blobUrl =  URL.createObjectURL(blob);
    setImageData(blobUrl);
    setLoading(false)
    
  })
}
//   const handleFetchImage = () => {
    
//     setLoading(true)
//     const form = new FormData()
// form.append('image_file', photo)

// fetch('https://clipdrop-api.co/reimagine/v1/reimagine', {
//   method: 'POST',
//   headers: {
//     'x-api-key':'99a3faa1d06ee6e311ede51d5d32aee63102d163ff9ab819c5e11735d5afdce0e0a45067f5d8ed7d2d4ebcbec3b7c894'  ,
//   },
//   body: form,
// })
//   .then(response => response.arrayBuffer())
//   .then(buffer => {
//     const blob = new Blob([buffer], { type: 'image/png' }); 
//     const blobUrl = URL.createObjectURL(blob);
//     setImageData(blobUrl);
//     setLoading(false)
//   })
//   .catch(error => {
//     console.error('Error fetching or processing the image:', error);
//   });
//   };

  return (
    <div>
      <div>
        <input
          type="file"
          id="fileInput"
          placeholder="Enter image URL"
          
        />
        <button onClick={()=>handleFetchImage(photo)}>Fetch Image</button>
      </div>
      <div>
        {
            imageData && !loading ? (<img style={{width:"200px",height:"200px"}} src={imageData} />):(<h1>loading...</h1>)
        }
      </div>
    </div>
  );
}

export default ImageFetcher;
