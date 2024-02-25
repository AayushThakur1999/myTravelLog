/* eslint-disable react/prop-types */
const Card = (props) => {
	console.log()
	return (
		<div className='card'>
			<div className="main--class">
				<img className='main--img' src={props.data.imgSrc} alt={`${props.data.destination}, ${props.data.country}`} />
				<div className="info--area">
					<div className="location--div">
						<img src="assets/Fill 220.png" alt="Pin" />
						<h4>{props.data.country.toUpperCase()}</h4>
						<a href={props.data.location}>View on Google Maps</a>
					</div>
					<h1>{props.data.destination}</h1>
					<h4>{props.data.arrival} - {props.data.departure}</h4>
					<p>{props.data.description}</p>
				</div>
			</div>
			<hr />
		</div>
	)
}

export default Card