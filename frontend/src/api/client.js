import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'

const options = {
    ignoreHeaders: true,
}

const client = applyCaseMiddleware(
    axios.create({
        baseURL: '${process.env.REACT_APP_BASE_URL}/api/v1',
    }),
    options
);

export default client;