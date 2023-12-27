import { Button } from '@material-ui/core';
import React from 'react'
import axios , * as others from 'axios';

const addItem = (e) => {
e.preventDefault();
var data = JSON.stringify({
  "channelId": "62cd6669b2dd530004ae05a8",
  "channelType": "whatsapp",
  "recipient": {
    "name": "Yogesh",
    "phone": "918893450065"
  },
  "whatsapp": {
    "type": "text",
    "text": {
      "body": "Message from Developer API POST"
    }
  }
});

var config = {
  method: 'post',
  
maxBodyLength: Infinity,
  url: 'https://server.gallabox.com/devapi/messages/whatsapp',
  headers: { 
    'apiKey': '63ee05fdd66aad5fc074e797', 
    'apiSecret': 'e39d71e44b534c84b178c141c7a18149', 
   
    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}


const TestWhats = () => {
    return (
        <div>
            <Button className='btn btn-primary' onClick={addItem}> Sent </Button>
        </div>
    )
}

export default TestWhats
