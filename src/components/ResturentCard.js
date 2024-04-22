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

export default ResturentCard;