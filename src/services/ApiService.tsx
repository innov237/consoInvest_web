import axios from 'axios';

export default class ApiService {

	//test = "https://innov237.com/consoGroup/public/"
    test = null
    
    baseUrl =  (1==2) ? this.test :`${process.env.REACT_APP_API_URL}`
    imageUrl = (1==2) ? `${this.test}storage/` :`${process.env.REACT_APP_API_URL}storage/`

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
