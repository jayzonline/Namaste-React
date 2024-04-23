//inline Style
const styleRes = {
    backgroundColor: "D3D3D3"
}
//props is an object 
const ResturentCard = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating , sla, cloudinaryImageId } = resData;
    return (
        //style={{ backgroundColor: "coral"}}
        <div className='res-cards' style={styleRes}>
            <img alt='hotel' className='card-res-logo'  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}></img>
            <h3>{name}</h3>
            <h5>Cuisines :{cuisines.join(',')}</h5>
            <h5 style={{color : 'red'}}>Rating : {avgRating}</h5>
            <h5 style={{color : 'green'}}>Delivery time :{sla.deliveryTime} minutes.</h5>
        </div>
    )
}

export default ResturentCard;