import axios from 'axios'

const KEY = 'AIzaSyBw25Ku_fI_0sFTPSdBnSWDW8jaX6w7yOM'

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
    part: 'snippet',
    maxResults: 40,
    key: KEY,
    regionCode:'JP',
    type: 'video',
}

export const fetchPopularData = async () => {
    return await youtube.get('/videos', {
        params: {
            ...params,
            chart: 'mostPopular'
        }
    })
}

export const fetchSelectedData = async (id) => {
    return await youtube.get('videos',{
        params: {
            ...params,
            id
        }
    })
}