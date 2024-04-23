import ResturentCard from "./ResturentCard";
//import ResObj , {RealObj} from '../utils/mockdata'
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import Footer from "./Footer";

export const Body = () => {

    const [ResturentList, setResturentList] = useState([]);
    const [filterResturentList, setFilterResturentList] = useState([])
    const [isFiltered, setResetButton] = useState(false);
    const [searchText, setSearchText] = useState('');

    const filterBasedOnRating = () => {
        const filteredList = ResturentList.filter((x) => x.info.avgRating > 4.5)
        setResturentList(filteredList);
        setResetButton(true)
    }

    const filterBasedOnName = (searchText) => {
        const filterList = ResturentList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterResturentList(filterList);
    }

    const resetFilter = () => {
        fetchData();
        setResetButton(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=D');
        const json = await data.json();
        const openResturentdata = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResturentList(openResturentdata);
        setFilterResturentList(openResturentdata)
    }

    return ResturentList.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='filter-search'>
                <div className="search-bar">
                    <input className="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => { filterBasedOnName(searchText) }}>Search</button>
                </div>
                <button className="btn-top-rated" onClick={
                    () => { filterBasedOnRating() }
                }
                > Top Rated Resturent</button>

                {isFiltered && (
                    <button
                        className="btn-reset"
                        onClick={() => { resetFilter() }}
                    >
                        Reset
                    </button>
                )}
            </div>
            <div className='res-container'>
                {
                    filterResturentList.map((res) => (<ResturentCard key={res.info.id} resData={res.info} />))
                }
            </div>
            <Footer/>
        </div>
        
    )
}
