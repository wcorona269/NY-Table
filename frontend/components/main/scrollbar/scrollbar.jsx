import React from 'react';
import {withRouter} from 'react-router-dom';
import ListIcon from './list_icon';

class ScrollBar extends React.Component {
	constructor(props) {
		super(props)

		this.shuffle = this.shuffle.bind(this);

		this.state = {
			rating: (Math.random() * (199 - 50) + 50),
			photos: {
				"Central Park Boathouse": "https://my-table-dev.s3.us-east-1.amazonaws.com/centralpark/41764400.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCMInSssYMdIRf9R0lF6jr3KUNRnr1EJwFUrLUDKZYZJwIgXiF4OThlPEBTyn78UnkXILZOT7GfNtsz3AONUzKXsOQq7QIIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzIzMDg4MjY2MTIiDELPduV50VfOb8DwjyrBAt4MfIOhLlUfbveGmm380ujQOqqGEKRi9TMDJwDJxwABWqVmJV3efjmdkmyYETWNahWM%2FhB4zVMBuZcBLKiLoGDcd3fsykEk43vtOhXZdcYNOanS%2FBtZ%2FzImbO286Lo13%2FKaI2ZjY2eTB3uqbFdUH5YYlH8UbyjVPzXDElDelYr2UkAw%2B2XPRGzbP2xsg1nSrEHzM6bC%2BmSFSzDOO4eGsKabSgWqVlELYEOf26nO2BoRhiGuOjFszHnubWoZn6EZoQVO1QqbSsZjhWTZp8n%2F4sYMu%2B4Vh3Z59w21PQ5J%2BMtsQRPW5fOxvIp40PXqHYPnmTY2bS2NqAsmI7GzD%2FJET9kkFMrNPWeksan2F0xN61u2G3XH%2BcsK%2BW%2BX8Oh2ptxWDVJxZObYW26MluRO3sk7%2F%2F%2F6b%2BU8cIkTSijAx3dfkqgF%2FDCaus%2BTBjqzAp8QNz9GKIPPAHTYsk62MtE%2FHXSsh8xQSaAqchM69GVf%2FdztopngG2O%2BTEsVQeoWy6tFFTpS7ZBfU0zTja2iC8zR6yxVKerfTTEHMixFuMkRpwy2JCGzNjJ5NsHHUBKGlv2l4ouHxTTin68vPpGajWryFkvXVfiyLqp1sqFjN74KzGSaNex9IZ8tBI7lRfH8cjGEvJ04vaHZHeA%2Bi4c2TXg3FuPAETAIR4SksGB9VT9LDFxlyXbdkcoiqLGA%2BFRVRML2E06MWreUW%2B5EUn9pve0sS6oX%2Bf4J743KTU0FzKhNoghNcsOSAv1tjsPoi%2BqtxScHq50pTIRJgUYYIEe%2BxO0fG9AXLuhsendefYWKpmIh%2BmemvqpSsYO1Fy%2BYqdPGw5incyEozeXqDwGCpWrzc7isidw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220505T200934Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR5TRYPH2C7752IOM%2F20220505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4ac773ecc4254ffc0e448013cd3a0a0c9bbf2eeb3a15704cf6ab364510a93b7d",
				"Bill's Bar and Burger": "https://my-table-dev.s3.us-east-1.amazonaws.com/bills/Bills-Bar-and-Burger-1-415x276.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCMInSssYMdIRf9R0lF6jr3KUNRnr1EJwFUrLUDKZYZJwIgXiF4OThlPEBTyn78UnkXILZOT7GfNtsz3AONUzKXsOQq7QIIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzIzMDg4MjY2MTIiDELPduV50VfOb8DwjyrBAt4MfIOhLlUfbveGmm380ujQOqqGEKRi9TMDJwDJxwABWqVmJV3efjmdkmyYETWNahWM%2FhB4zVMBuZcBLKiLoGDcd3fsykEk43vtOhXZdcYNOanS%2FBtZ%2FzImbO286Lo13%2FKaI2ZjY2eTB3uqbFdUH5YYlH8UbyjVPzXDElDelYr2UkAw%2B2XPRGzbP2xsg1nSrEHzM6bC%2BmSFSzDOO4eGsKabSgWqVlELYEOf26nO2BoRhiGuOjFszHnubWoZn6EZoQVO1QqbSsZjhWTZp8n%2F4sYMu%2B4Vh3Z59w21PQ5J%2BMtsQRPW5fOxvIp40PXqHYPnmTY2bS2NqAsmI7GzD%2FJET9kkFMrNPWeksan2F0xN61u2G3XH%2BcsK%2BW%2BX8Oh2ptxWDVJxZObYW26MluRO3sk7%2F%2F%2F6b%2BU8cIkTSijAx3dfkqgF%2FDCaus%2BTBjqzAp8QNz9GKIPPAHTYsk62MtE%2FHXSsh8xQSaAqchM69GVf%2FdztopngG2O%2BTEsVQeoWy6tFFTpS7ZBfU0zTja2iC8zR6yxVKerfTTEHMixFuMkRpwy2JCGzNjJ5NsHHUBKGlv2l4ouHxTTin68vPpGajWryFkvXVfiyLqp1sqFjN74KzGSaNex9IZ8tBI7lRfH8cjGEvJ04vaHZHeA%2Bi4c2TXg3FuPAETAIR4SksGB9VT9LDFxlyXbdkcoiqLGA%2BFRVRML2E06MWreUW%2B5EUn9pve0sS6oX%2Bf4J743KTU0FzKhNoghNcsOSAv1tjsPoi%2BqtxScHq50pTIRJgUYYIEe%2BxO0fG9AXLuhsendefYWKpmIh%2BmemvqpSsYO1Fy%2BYqdPGw5incyEozeXqDwGCpWrzc7isidw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220505T201540Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR5TRYPH2C7752IOM%2F20220505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f53379a46ab7c32a1a02c7cb1a2312850a3105ccca2baea5288763b3e8d9566",
				"Patsy's Pizzeria": "https://my-table-dev.s3.us-east-1.amazonaws.com/patsys/patsys-pizzeria-julienne-schaer-002__large.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCMInSssYMdIRf9R0lF6jr3KUNRnr1EJwFUrLUDKZYZJwIgXiF4OThlPEBTyn78UnkXILZOT7GfNtsz3AONUzKXsOQq7QIIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzIzMDg4MjY2MTIiDELPduV50VfOb8DwjyrBAt4MfIOhLlUfbveGmm380ujQOqqGEKRi9TMDJwDJxwABWqVmJV3efjmdkmyYETWNahWM%2FhB4zVMBuZcBLKiLoGDcd3fsykEk43vtOhXZdcYNOanS%2FBtZ%2FzImbO286Lo13%2FKaI2ZjY2eTB3uqbFdUH5YYlH8UbyjVPzXDElDelYr2UkAw%2B2XPRGzbP2xsg1nSrEHzM6bC%2BmSFSzDOO4eGsKabSgWqVlELYEOf26nO2BoRhiGuOjFszHnubWoZn6EZoQVO1QqbSsZjhWTZp8n%2F4sYMu%2B4Vh3Z59w21PQ5J%2BMtsQRPW5fOxvIp40PXqHYPnmTY2bS2NqAsmI7GzD%2FJET9kkFMrNPWeksan2F0xN61u2G3XH%2BcsK%2BW%2BX8Oh2ptxWDVJxZObYW26MluRO3sk7%2F%2F%2F6b%2BU8cIkTSijAx3dfkqgF%2FDCaus%2BTBjqzAp8QNz9GKIPPAHTYsk62MtE%2FHXSsh8xQSaAqchM69GVf%2FdztopngG2O%2BTEsVQeoWy6tFFTpS7ZBfU0zTja2iC8zR6yxVKerfTTEHMixFuMkRpwy2JCGzNjJ5NsHHUBKGlv2l4ouHxTTin68vPpGajWryFkvXVfiyLqp1sqFjN74KzGSaNex9IZ8tBI7lRfH8cjGEvJ04vaHZHeA%2Bi4c2TXg3FuPAETAIR4SksGB9VT9LDFxlyXbdkcoiqLGA%2BFRVRML2E06MWreUW%2B5EUn9pve0sS6oX%2Bf4J743KTU0FzKhNoghNcsOSAv1tjsPoi%2BqtxScHq50pTIRJgUYYIEe%2BxO0fG9AXLuhsendefYWKpmIh%2BmemvqpSsYO1Fy%2BYqdPGw5incyEozeXqDwGCpWrzc7isidw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220505T201219Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAR5TRYPH2C7752IOM%2F20220505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=73b12572eaa4ee8122cc9e14a2d17dcad24da53ed4353a808260e3a5bb4a9b03",
				"Carmine's - 91st Street - NYC": "https://my-table-dev.s3.us-east-1.amazonaws.com/carmines/29370469.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCMInSssYMdIRf9R0lF6jr3KUNRnr1EJwFUrLUDKZYZJwIgXiF4OThlPEBTyn78UnkXILZOT7GfNtsz3AONUzKXsOQq7QIIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzIzMDg4MjY2MTIiDELPduV50VfOb8DwjyrBAt4MfIOhLlUfbveGmm380ujQOqqGEKRi9TMDJwDJxwABWqVmJV3efjmdkmyYETWNahWM%2FhB4zVMBuZcBLKiLoGDcd3fsykEk43vtOhXZdcYNOanS%2FBtZ%2FzImbO286Lo13%2FKaI2ZjY2eTB3uqbFdUH5YYlH8UbyjVPzXDElDelYr2UkAw%2B2XPRGzbP2xsg1nSrEHzM6bC%2BmSFSzDOO4eGsKabSgWqVlELYEOf26nO2BoRhiGuOjFszHnubWoZn6EZoQVO1QqbSsZjhWTZp8n%2F4sYMu%2B4Vh3Z59w21PQ5J%2BMtsQRPW5fOxvIp40PXqHYPnmTY2bS2NqAsmI7GzD%2FJET9kkFMrNPWeksan2F0xN61u2G3XH%2BcsK%2BW%2BX8Oh2ptxWDVJxZObYW26MluRO3sk7%2F%2F%2F6b%2BU8cIkTSijAx3dfkqgF%2FDCaus%2BTBjqzAp8QNz9GKIPPAHTYsk62MtE%2FHXSsh8xQSaAqchM69GVf%2FdztopngG2O%2BTEsVQeoWy6tFFTpS7ZBfU0zTja2iC8zR6yxVKerfTTEHMixFuMkRpwy2JCGzNjJ5NsHHUBKGlv2l4ouHxTTin68vPpGajWryFkvXVfiyLqp1sqFjN74KzGSaNex9IZ8tBI7lRfH8cjGEvJ04vaHZHeA%2Bi4c2TXg3FuPAETAIR4SksGB9VT9LDFxlyXbdkcoiqLGA%2BFRVRML2E06MWreUW%2B5EUn9pve0sS6oX%2Bf4J743KTU0FzKhNoghNcsOSAv1tjsPoi%2BqtxScHq50pTIRJgUYYIEe%2BxO0fG9AXLuhsendefYWKpmIh%2BmemvqpSsYO1Fy%2BYqdPGw5incyEozeXqDwGCpWrzc7isidw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220505T201124Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR5TRYPH2C7752IOM%2F20220505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33e755bafe3ca40205f32c9b0c25813e42081005bc196ebe0af6fbf9b67e3f22",
				"Hearth": "https://my-table-dev.s3.us-east-1.amazonaws.com/hearth/26447906.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCMInSssYMdIRf9R0lF6jr3KUNRnr1EJwFUrLUDKZYZJwIgXiF4OThlPEBTyn78UnkXILZOT7GfNtsz3AONUzKXsOQq7QIIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzIzMDg4MjY2MTIiDELPduV50VfOb8DwjyrBAt4MfIOhLlUfbveGmm380ujQOqqGEKRi9TMDJwDJxwABWqVmJV3efjmdkmyYETWNahWM%2FhB4zVMBuZcBLKiLoGDcd3fsykEk43vtOhXZdcYNOanS%2FBtZ%2FzImbO286Lo13%2FKaI2ZjY2eTB3uqbFdUH5YYlH8UbyjVPzXDElDelYr2UkAw%2B2XPRGzbP2xsg1nSrEHzM6bC%2BmSFSzDOO4eGsKabSgWqVlELYEOf26nO2BoRhiGuOjFszHnubWoZn6EZoQVO1QqbSsZjhWTZp8n%2F4sYMu%2B4Vh3Z59w21PQ5J%2BMtsQRPW5fOxvIp40PXqHYPnmTY2bS2NqAsmI7GzD%2FJET9kkFMrNPWeksan2F0xN61u2G3XH%2BcsK%2BW%2BX8Oh2ptxWDVJxZObYW26MluRO3sk7%2F%2F%2F6b%2BU8cIkTSijAx3dfkqgF%2FDCaus%2BTBjqzAp8QNz9GKIPPAHTYsk62MtE%2FHXSsh8xQSaAqchM69GVf%2FdztopngG2O%2BTEsVQeoWy6tFFTpS7ZBfU0zTja2iC8zR6yxVKerfTTEHMixFuMkRpwy2JCGzNjJ5NsHHUBKGlv2l4ouHxTTin68vPpGajWryFkvXVfiyLqp1sqFjN74KzGSaNex9IZ8tBI7lRfH8cjGEvJ04vaHZHeA%2Bi4c2TXg3FuPAETAIR4SksGB9VT9LDFxlyXbdkcoiqLGA%2BFRVRML2E06MWreUW%2B5EUn9pve0sS6oX%2Bf4J743KTU0FzKhNoghNcsOSAv1tjsPoi%2BqtxScHq50pTIRJgUYYIEe%2BxO0fG9AXLuhsendefYWKpmIh%2BmemvqpSsYO1Fy%2BYqdPGw5incyEozeXqDwGCpWrzc7isidw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220505T201315Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR5TRYPH2C7752IOM%2F20220505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7668395f056a78386348099fb62d67e8155330e5eaeb1c8345fd4c41587e75c2",
				"Peter Luger Steak House": "https://my-table-dev.s3.us-east-1.amazonaws.com/lugers/246.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJHMEUCIQCMInSssYMdIRf9R0lF6jr3KUNRnr1EJwFUrLUDKZYZJwIgXiF4OThlPEBTyn78UnkXILZOT7GfNtsz3AONUzKXsOQq7QIIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxMzIzMDg4MjY2MTIiDELPduV50VfOb8DwjyrBAt4MfIOhLlUfbveGmm380ujQOqqGEKRi9TMDJwDJxwABWqVmJV3efjmdkmyYETWNahWM%2FhB4zVMBuZcBLKiLoGDcd3fsykEk43vtOhXZdcYNOanS%2FBtZ%2FzImbO286Lo13%2FKaI2ZjY2eTB3uqbFdUH5YYlH8UbyjVPzXDElDelYr2UkAw%2B2XPRGzbP2xsg1nSrEHzM6bC%2BmSFSzDOO4eGsKabSgWqVlELYEOf26nO2BoRhiGuOjFszHnubWoZn6EZoQVO1QqbSsZjhWTZp8n%2F4sYMu%2B4Vh3Z59w21PQ5J%2BMtsQRPW5fOxvIp40PXqHYPnmTY2bS2NqAsmI7GzD%2FJET9kkFMrNPWeksan2F0xN61u2G3XH%2BcsK%2BW%2BX8Oh2ptxWDVJxZObYW26MluRO3sk7%2F%2F%2F6b%2BU8cIkTSijAx3dfkqgF%2FDCaus%2BTBjqzAp8QNz9GKIPPAHTYsk62MtE%2FHXSsh8xQSaAqchM69GVf%2FdztopngG2O%2BTEsVQeoWy6tFFTpS7ZBfU0zTja2iC8zR6yxVKerfTTEHMixFuMkRpwy2JCGzNjJ5NsHHUBKGlv2l4ouHxTTin68vPpGajWryFkvXVfiyLqp1sqFjN74KzGSaNex9IZ8tBI7lRfH8cjGEvJ04vaHZHeA%2Bi4c2TXg3FuPAETAIR4SksGB9VT9LDFxlyXbdkcoiqLGA%2BFRVRML2E06MWreUW%2B5EUn9pve0sS6oX%2Bf4J743KTU0FzKhNoghNcsOSAv1tjsPoi%2BqtxScHq50pTIRJgUYYIEe%2BxO0fG9AXLuhsendefYWKpmIh%2BmemvqpSsYO1Fy%2BYqdPGw5incyEozeXqDwGCpWrzc7isidw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220505T201403Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAR5TRYPH2C7752IOM%2F20220505%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e9660498504256b4ff798f476bf53db0ed8294db412027f23d8501beba910b9",
			}
		}
	}

	componentDidMount() {
		this.props.fetchRests();
	}

	// Fisher-Yates shuffle 
	shuffle(array) {
		let currentIndex = array.length,  randomIndex;
	
		// While there remain elements to shuffle.
		while (currentIndex != 0) {
	
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
	
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}
	
		return array;
	}


	render () {
		
		const {rests} = this.props;
		// debugger;

		const display = rests.length ? (
			<ul className="scrollbar-ul">
				{this.shuffle(rests).map((rest, idx) =>
					<ListIcon
						name={rest.name}
						cuisines={rest.cuisines}
						neighborhood={rest.neighborhood}
						price_range={rest.price_range}
						key={idx}
						icon={this.state.photos[rest.name]}
						rating={this.state.rating}
						// rating={this.avgRating(rest.name)}
						// alternatively do this in mSTP
						// function for this in model/controller?
						// 99 cats reservation model -- custom methods
					/>)}
			</ul>
		) : (
			null
			)
			
		return (
			display
		)
	}
}
	
	export default (ScrollBar);
	
	
	
	
	// check if we have restaurant data in our frontend state
	// until it is no longer empty, wait to map it
	// component did mount
	// ternary in return statement showing loading icon before components mount
	
	// fetch restaurants & map them to an array
	// Grab random restaurants from array & feed data to a new ListIcon, 10x per scrollbar
	// const dumbRests = ["peter luger", "patsy's pizza", "chipotle", "sweetgreen", "mcdonalds"]
	// debugger;