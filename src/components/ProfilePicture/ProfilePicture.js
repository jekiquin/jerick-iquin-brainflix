import './ProfilePicture.scss';
import profilePicture from '../../assets/Images/Profile/Mohan-muruge.jpg';

function ProfilePicture({ className }) {
    return (
        <img className={className} src={profilePicture} alt='Mohan Muruge' />
    )
}

export default ProfilePicture;