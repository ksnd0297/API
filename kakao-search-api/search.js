const axios = require('axios');
const express = require('express');
const app = express();

app.get('/hope', (req, res) => {
 axios.get('https://dapi.kakao.com/v2/search/web', {
    headers: { 'Authorization': 'KakaoAK d89e7194008a87f2f187774a7717f48a' },
    params: {
      query: "YES"
    }
  })
    .then(res => {
      console.log(res.data.documents[0].contents);
    })
})

app.get('/', (req, res) => {
  axios.get('localhost:3000/hope')
    .then((res)=> {
      console.log(res.data);
    });
})

app.listen(3000, () => console.log("port is listen"));