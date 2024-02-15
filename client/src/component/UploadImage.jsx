// import axios from 'axios';
// import React, { useState } from 'react';

// function UploadImage(){
//     const preset_key = "v5lge08i";
//     const cloud_name = "dbegmxgyd";
//     const [image, setImage] = useState();

//     function handleFile(event) {
//         const file = event.target.files[0];
//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append("upload_preset", preset_key);
//         axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
//         .then(res => setImage(res.data.secure_url))
//         .catch( err => console.log(err));
//     }

//     return (
//         <>
//         <input type = "file" name = "image" onChange = {handleFile}></input>
//         <br></br>
//         <img src = {image} />
//         </>
//     )
// }

// export default UploadImage;

import axios from 'axios';
import React, { useState } from 'react';

function UploadImage({onHandleNewImageURL}){
    const preset_key = "v5lge08i";
    const cloud_name = "dbegmxgyd";
    const [image, setImage] = useState();
    let imageURL = '';

    function handleFile(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", preset_key);
        axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData)
        // .then(res => setImage(res.data.secure_url))
        .then(res => {
            console.log(res);
            imageURL = res.data.secure_url;
            onHandleNewImageURL(imageURL);
        })
        .catch( err => console.log(err));
    }

    return (
        <>
        <input type = "file" name = "image" onChange = {handleFile}></input>
        {/* <br></br>
        <img src = {image} /> */}
        </>
    )
}

export default UploadImage;