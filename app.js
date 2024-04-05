import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://static.vecteezy.com/system/resources/previews/010/628/614/original/food-order-logo-mobile-food-logo-online-food-delivery-logo-vector.jpg' />
            </div>
            <div className='nav-items'>
                <ul className='unorder-list'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Resturents</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

//inline Style
const styleRes = {
    backgroundColor: "D3D3D3"
}
//props is an object 
//{resName}
const ResturentCard = (props) => {
    const { resData } = props
    const { resName, cusines, avgRating, deliveryTime, img } = resData;
    return (
        //style={{ backgroundColor: "coral"}}
        <div className='res-cards' style={styleRes}>
            <img alt='hotel' className='card-res-logo' src={img}></img>
            <h3>{resName}</h3>
            <h4>{cusines.join(', ')}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes.</h4>
        </div>
    )
}


const resObj =
    [
        {
            id: 1,
            resName: 'KFC',
            cusines: ['biriyani', 'burger', 'sandwitch', 'smoothie'],
            img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0dccvu2xvdzfajo9ccs',
            avgRating: 3.8,
            deliveryTime: 38
        },
        {
            id: 2,
            resName: 'Meghana Foods',
            cusines: ['biriyani', 'southIndian', 'NorthIndian'],
            img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xoyegxqmuhjnjykxg4jn',
            avgRating: 4.5,
            deliveryTime: 40
        },
        {
            id: 3,
            resName: 'SaravanaBhavan',
            cusines: ['southIndian', 'NorthIndian'],
            img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xoyegxqmuhjnjykxg4jn',
            avgRating: 4,
            deliveryTime: 30
        }

    ]

const Body = () => {
    //these are called props 
    // <ResturentCard resName="Meghana Foods"/>
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resObj.map((res) => (<ResturentCard key={res.id} resData={res} />))
                }
            </div>
        </div>
    )
}



//component compostion
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)

