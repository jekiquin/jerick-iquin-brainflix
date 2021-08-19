import './ProfilePicture.scss';
import profilePicture from '../../assets/Images/Profile/Mohan-muruge.jpg';

function ProfilePicture(props) {
    return (
        <img className={props.className} src={profilePicture} alt='Mohan Muruge' />
    )
}

export default ProfilePicture;