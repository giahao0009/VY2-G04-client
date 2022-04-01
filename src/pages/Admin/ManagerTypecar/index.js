import React, {useEffect, useState} from 'react';
import DataTable from '../../../components/AdminComponents/DataTable';
import typeCarApi from '../../../apis/typeCarApi';

function ManagerTypecar() {
    const headingTable = ["Loại xe"];
    const [typeCarList, setTypeCarList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await typeCarApi.getAll();
                setTypeCarList(response.data);
            }catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            <DataTable headingTable={headingTable} dataTable={typeCarList}/>
        </div>
    )
}

export default ManagerTypecar;