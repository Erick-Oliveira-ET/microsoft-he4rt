import React, {useState} from 'react';

import faceDetection from './faceDetection';
import Navbar from '../../components/Navbar/Navbar';

import './face-detection.css';

const FaceRecognition = () => {
    const [imgUrl, setImgUrl] = useState('');
    const [imgData, setImgData] = useState([]);

    console.log("imgData " + imgData);
    
    function handleInputChange(e) {
        e.preventDefault();
        setImgUrl(e.target.value);
    }

    async function handleSubmitClick(e){
        if (imgData !== '') {
            let imgProcess = await faceDetection(imgUrl);
            console.log( "imgProcess " + imgProcess); 
            console.log("imgProcess 0 " + imgProcess[0]); 
            setImgData(imgProcess);
        }
    }

    return (
        <div id="face-recognition-container" >
            <Navbar />

            {imgData ? 
                <h1 className="h1-title">Face Recognition</h1>
                :  
                <h1 className="h1-title2">Face Recognition</h1>
            }

            <div className="face-submit">
                <input type="text" className="face-input" onChange={handleInputChange}/>
                <button type="button" className="face-button" onClick={handleSubmitClick}>Submit</button>

            </div>

            <main className="face-card">
                <div className="face-img">
                    <img src={imgUrl} alt="">
                        
                    </img>
                    {imgData &&
                        imgData.map((data, index) => {
                            return(
                                <div 
                                    style={{
                                        position: "absolute",
                                        borderWidth: "2px",
                                        borderStyle: "solid",
                                        borderColor: "#6a1abe",
                                        top: data.faceRectangle.top,
                                        left: data.faceRectangle.left,
                                        width: data.faceRectangle.width,
                                        height: data.faceRectangle.height,
                                    }}
                                    className="face-img-specif"
                                >
                                    <div className="face-specific-info">
                                        Image {1+index}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                {imgData &&
                    imgData.map((data, index) => {
                        return(
                            <div className="face-info"> 
                                <h1>Image Data</h1>
                        
                                        <div className="face-info-single-wrapper">
                                            <h1 className="face-h1">Face {index+1}</h1>
                                            
                                            <div className="block">
                                                <div className="half-block">
                                                    <h2 className="h2-general">
                                                        General
                                                    </h2>
                                                    <div className="row">
                                                            <div className="single-item-info">
                                                                <strong>Gender:</strong>
                                                                <h2>{data.faceAttributes.gender}</h2>
                                                            </div>
                                                            <div className="single-item-info">
                                                                <strong>Age:</strong>
                                                                <h2>{data.faceAttributes.age}</h2>
                                                            </div>
                                                            <div className="single-item-info">
                                                                <strong>Glasses:</strong>
                                                                <h2>{data.faceAttributes.glasses}</h2>
                                                            </div>
                                                            <div className="single-item-info">
                                                                <strong>Makeup:</strong>
                                                                {data.faceAttributes.makeup.eyeMakeupLip ||
                                                                    data.faceAttributes.makeup.lipMakeup 
                                                                ?
                                                                <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                                :
                                                                <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                                }
                                                            </div>
                                                            <div className="single-item-info">
                                                                <strong>Bangs:</strong>
                                                                {data.faceAttributes.occlusion.foreheadOccluded
                                                                ?
                                                                <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                                :
                                                                <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                                }
                                                            </div>

                                                            <div className="single-item-info">
                                                                <strong>Hair Visible:</strong>
                                                                {!data.faceAttributes.hair.invisible
                                                                ?
                                                                <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                                :
                                                                <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                                }
                                                            </div>

                                                            <div className="single-item-info">
                                                                <strong>Smile:</strong>
                                                                {data.faceAttributes.smile
                                                                ?
                                                                <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                                :
                                                                <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                                }
                                                            </div>

                                                    </div>
                                                    
                                                </div>
                                                
                                                <div className="half-block">
                                                    <h2 className="h2-emotions">
                                                        Emotions
                                                    </h2>

                                                    <div className="row">
                                                        <div className="single-item-info">
                                                            <strong>Anger:</strong>
                                                            {data.faceAttributes.emotion.anger
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Contempt:</strong>
                                                            {data.faceAttributes.emotion.contempt
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Disgust:</strong>
                                                            {data.faceAttributes.emotion.disgust
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Fear:</strong>
                                                            {data.faceAttributes.emotion.fear
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Happiness:</strong>
                                                            {data.faceAttributes.emotion.happiness
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Neutral:</strong>
                                                            {data.faceAttributes.emotion.neutral
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Sadness:</strong>
                                                            {data.faceAttributes.emotion.sadness
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                        <div className="single-item-info">
                                                            <strong>Surprise:</strong>
                                                            {data.faceAttributes.emotion.surprise
                                                            ?
                                                            <h2 style={{color: "#1fff3d"}} >Yes</h2>
                                                            :
                                                            <h2 style={{color: "#fe0c3e"}} >No</h2>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                            </div>
                        )
                    })
                }   
                     

            </main>

        </div>
    );
}

export default FaceRecognition; 