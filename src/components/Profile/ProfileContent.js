import React, { useState } from 'react';
import AuthButtons from '../Auth/AuthButtons';
import Profile from './Profile';

const ProfileContent = () => {
    const isUserAuth = false;
    return (
        <>
            {
                isUserAuth ? <Profile /> : <AuthButtons />
            }

        </>
    );
}

export default ProfileContent;