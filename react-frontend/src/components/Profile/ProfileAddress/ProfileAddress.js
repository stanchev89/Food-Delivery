import './ProfileAddress.css';
import {useState} from 'react';
import ProfileAddressItem from "./ProfileAddressItem/ProfileAddressItem";

const mapBgRegions = {
    smolyan: 'Смолян',
    raykovo: 'Райково',
    ustovo: 'Устово',
    kaptaja: 'Каптажа'
}

const ProfileAddress = ({user,setUser,setNotification,onDeleteAddressHandler,onUpdateExistAddressHandler}) => {
    const [addAddressMode, setAddAddressMode] = useState(false);

    const onChangeAddressHandler = (address,index) => {
        console.log(address,index);
    };

    return (
        <section className="profile-address">
            {
                user?.address.map((adr, index) => (
                    <ProfileAddressItem
                        key={adr?.location + adr?.region}
                        address={adr}
                        index={index}
                        onDeleteAddressHandler={onDeleteAddressHandler}
                        onUpdateExistAddressHandler={onUpdateExistAddressHandler}
                        setNotification={setNotification}
                    />
                ))
            }
        </section>
    )
}

export default ProfileAddress;
