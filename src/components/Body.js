import ResturentCard from "./ResturentCard";
import ResObj from '../utils/mockdata'
import { useState } from "react";




export const Body = () => {

    const [ResturentList, setResturentList] = useState(ResObj);
    const filterResturent = ()=>{
        const filteredList = ResturentList.filter((x) => x.avgRating > 4)
        setResturentList(filteredList)
    }


    return (
        <div className='body'>
            <div className='filter'>
                <button className="btn-top-rated" onClick={
                    () => {filterResturent()}
                }
                > Top Rated Resturent</button>
            </div>
            <div className='res-container'>
                {
                    ResturentList.map((res) => (<ResturentCard key={res.id} resData={res} />))
                }
            </div>
        </div>
    )
}
