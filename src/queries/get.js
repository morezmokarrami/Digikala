import axios from "axios";

const get =  ({url, ...other}) => {
    return  axios({
        url: url,
        ...other
    })
}

export default get;