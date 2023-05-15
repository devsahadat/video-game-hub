import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'32030d9ac7af41b7974c931d144167b6'
    }
})
