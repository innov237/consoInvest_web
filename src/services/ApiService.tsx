import axios from 'axios';

export default class ApiService {

	test = "https://innov237.com/consoGroup/public/"
	//test = "http://localhost:8000/"
    
    baseUrl =  `${this.test}`
    imageUrl = `${this.test}storage/`

    postData = async (route: string, data: any) => {
        return await axios.post(this.baseUrl + route, data);
    }

    uploadFile = async (data: any) => {
        let formData = new FormData()
        formData.append('file', data)

        return await axios.post(this.baseUrl + 'upload', formData);
    }
   
    getData = async (route: string) => {
        return await axios.get(this.baseUrl + route);
    }

}
