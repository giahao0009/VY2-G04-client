import React, {useState, useEffect} from 'react';
import DataTable from '../../../components/AdminComponents/DataTable';
import carApi from '../../../apis/carApi';

function ManagerCar() {
    const headingTable = ["Biển số xe", "Mã loại", "Hiệu xe", "Mã hãng xe", "Số chỗ ngồi"];
    const [carList, setCarList] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const response = await carApi.getAll();
                setCarList(response.data);
            }catch(e){
                console.log(e);
            }
        };
        fetchData();
    }, [])

    console.log(carList);

    return (
        <div>
        <DataTable headingTable={headingTable} dataTable={carList}/>
        </div>
    )
}

export default ManagerCar