import axios from 'axios';

export default class ApiService {

	//test = "https://innov237.com/consoGroup/public/"
	test = null
    
    baseUrl =  (this.test) ? this.test :`${process.env.REACT_APP_API_URL}`
    imageUrl = (this.test) ? `${this.test}storage/` :`${process.env.REACT_APP_API_URL}storage/`

    postData = async (route: string, data: any) => {
        return await axios.post(this.baseUrl + route, data);
    }

    getData = async (route: string) => {
        return await axios.get(this.baseUrl + route);
    }

}
