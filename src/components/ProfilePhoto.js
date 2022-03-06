import React from 'react';
import profilejpg from '../profilephoto.jpg';

const ProfilePhoto = () => {
    return (
        <div>
        <img  src={profilejpg} className="" alt="profilepic" />
        </div>
    );
};

export default ProfilePhoto;