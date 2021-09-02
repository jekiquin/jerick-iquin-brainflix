import './ProfilePicture.scss';
// import profilePicture from '../../assets/Images/Profile/Mohan-muruge.jpg';
import {BASE_URL} from '../../peripheral/api';

function ProfilePicture({ className }) {
    const profilePicture = BASE_URL + '/Profile/Mohan-muruge.jpg';
    return (
        <img className={className} src={profilePicture} alt='Mohan Muruge' />
    )
}

export default ProfilePicture;