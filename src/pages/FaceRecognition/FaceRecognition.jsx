import React, {useState} from 'react';

import faceDetection from './faceDetection';

const FaceRecognition = () => {
    const [imgUrl, setImgUrl] = useState('');
    const [imgData, setImgData] = useState({});

    function handleInputChange(e) {
        e.preventDefault();
        setImgUrl(e.target.value);
    }

    function handleSubmitClick(e){
        if (imgData !== '') {
            setImgData(faceDetection(imgUrl));
            console.log(imgData);  
        }
    }

    return (
        <div>
            <h1>Face Recognition</h1>
            <input type="text" onChange={handleInputChange}/>
            <button type="button" onClick={handleSubmitClick}>Submit</button>
            <img src={imgUrl} alt="Preview da imagem"/>

        </div>
    );
}

export default FaceRecognition; 