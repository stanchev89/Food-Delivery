import './OrderAddress.css';
import userService from "../../../services/userService";
import environments from "../../../environments";
import {useState, useEffect} from 'react';

const mapRegions = environments.regions;
const mapBgRegions = {
    smolyan: 'Смолян',
    raykovo: 'Райково',
    ustovo: 'Устово',
    kaptaja: 'Каптажа'
}
const OrderAddress = ({user, order, setOrder, setUser}) => {

    const [viewNewAddress, setViewNewAddress] = useState(false);

    const toggleNewAddressForm = () => {
        setViewNewAddress(prevState => !prevState);
    }

    useEffect(() => {
        if(user?.address.length > 0) {
            setOrder(prevState => ({...prevState,address: user.address[0]}))
        }
    },[])


    const addUserNewAddress = (e) => {
        e.preventDefault();
        const region = e.target.region?.value;
        const location = e.target.location?.value;
        const exist = user?.address?.find(adr => adr.location === location);
        if(region && location && ! exist) {
            const delivery = mapRegions[region];
            const newAddress = {region, location, delivery}
            userService.editUserData({addAddress: newAddress})
                .then(user => setUser(user))
                .then(() => toggleNewAddressForm())
                .catch(console.error)
        }
    }

    const onSelectAddressHandler = (e) => {
        const selectedLocation = e.target.value;
        const selected = user?.address?.find(adr => adr.location === selectedLocation)
        if(selected) {
            const {region,location,delivery} = selected;
            setOrder(prevState => ({...prevState, address: {region, location, delivery}}))
        }
    }
    return (
        <article className="order-address">
            <h3>Изберете адрес</h3>
            {
                viewNewAddress
                    ? <article className="add-new-address">
                        <p>Добавяне на нов адрес</p>
                        <form className="add-new-address-form" onSubmit={addUserNewAddress}>
                            <label htmlFor="region">Регион</label>
                            <select name="region" id="region">
                                {
                                    Object.keys(mapRegions).map(key => (
                                        <option value={key} key={key}>{mapBgRegions[key]}</option>
                                    ))
                                }
                            </select>
                            <label htmlFor="add-new-address">Адрес</label>
                            <input type="text" name="location" id="add-new-address"/>
                            <article className="add-new-address-form-ctrl">
                                <button type="button" className="close-new-address-btn"
                                        onClick={toggleNewAddressForm}>Затвори
                                </button>
                                <input type="submit" className="confirm-new-address-btn" value="Добави"/>
                            </article>
                        </form>
                    </article>
                    : <article className="my-address">
                        <form className="my-address-form" onBlur={onSelectAddressHandler}>
                            <p>Моите адреси:</p>
                            <select name="address" id="address">
                                {
                                    user?.address.map(adr => (
                                        <option key={adr.location} value={adr.location}>{adr.location}, {mapBgRegions[adr.region]}</option>
                                    ))
                                }
                            </select>
                        </form>
                        <button className="add-new-address-btn" onClick={toggleNewAddressForm}>Добави нов адрес</button>
                    </article>

            }

        </article>
    )
}
export default OrderAddress;