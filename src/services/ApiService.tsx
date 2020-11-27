import axios from 'axios';

export default class ApiService {

    baseUrl = "https://innov237.com/consoGroup/public/";

    postData = async (route: string, data: any) => {
        return await axios.post(this.baseUrl + route, data);
    }

    getData = async (route: string) => {
        return await axios.get(this.baseUrl + route);
    }

}