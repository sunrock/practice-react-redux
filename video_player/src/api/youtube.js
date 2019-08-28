import axios from 'axios';

const KEY = 'AIzaSyCVOIZnX7mjb2byfvNv8Qm3hnFHv8KPFwo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 7,
    key: KEY
  }
})