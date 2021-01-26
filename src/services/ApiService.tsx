import axios from 'axios';

export default class ApiService {

   
    baseUrl = `${process.env.REACT_APP_API_URL}`;
    imageUrl = "`${process.env.REACT_APP_API_URL}storage/`";

    postData = async (route: string, data: any) => {
        return await axios.post(this.baseUrl + route, data);
    }

    getData = async (route: string) => {
        return await axios.get(this.baseUrl + route);
    }

}
