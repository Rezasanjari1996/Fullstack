import React, { FormEvent,useState } from 'react';
import { personDto } from "./../../../Method/interface";
import { Create } from "../../../apis/person/create";
import { create } from 'domain';
import { GetAll } from '../../../apis/person/getall';
const Table:React.FC = () =>{
 const [list,setstate]=useState();

    async function onsubmitGet(e:React.FormEvent){
        e.preventDefault();
     
        let respons=await GetAll();
        console.log(typeof respons.body.list);
        setstate(respons.body.list);
        console.log(respons.body.list);


    }

    return (
        <div >
            <button onClick={onsubmitGet}></button>
            {list}
         
        </div>
    );
}



export default Table;