import axiosClient from './axiosClient';

class TypeCarApi {
    getAll = (params) => {
        const url = '/typecar/getalltype';
        return axiosClient.get(url, { params});
    }

    getById = (id) => {
        const url = `/car/${id}`;
        return axiosClient.get(url)
    }

}

const typeCarApi = new TypeCarApi();
export default typeCarApi;