// api.js
import axios from 'axios';
const workerUrl = new URL('https://worker-morning-surf-c4bc.vishalgowda096.workers.dev/');
//const workerUrl = new URL('http://localhost:8787')
export async function sendPostRequest(postData) {
  try {
    const response = await axios.post(workerUrl, postData);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}
