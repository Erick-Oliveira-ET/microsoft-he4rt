const request = require('request');

require('dotenv').config();

const config = require('./faceConfig.json');

const subscriptionKey = config.subscriptionKey;
const uriBase = config.uriBase;

const faceDetection = (imageUrl) => { 
  const params = {
    'returnFaceId': 'true',
    'returnFaceLandmarks': 'false',
    'returnFaceAttributes': 'age,gender,headPose,smile,facialHair,glasses,' +
    'emotion,hair,makeup,occlusion,accessories,blur,exposure,noise'
  };

  const options = {
    uri: uriBase,
    qs: params,
    body: '{"url": "' + imageUrl + '"}',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

  return new Promise(resolve => {
    request.post(options, (error, response, body) => {
      if (error) {
        console.log('Error ao identificar a imagem: ', error);
        return;
      }
      let jsonResponse = JSON.parse(body);
      console.log('JSON Response\n');
      console.log(jsonResponse);
  
      resolve(jsonResponse);
    })

  })
}

export default faceDetection; 