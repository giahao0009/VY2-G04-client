import axiosClient from './axiosClient';

class CarApi {
    getAll = (params) => {
        const url = '/car/getallcar';
        return axiosClient.get(url, { params});
    }

    getById = (id) => {
        const url = `/car/${id}`;
        return axiosClient.get(url)
    }


}

const carApi = new CarApi();
export default carApi;