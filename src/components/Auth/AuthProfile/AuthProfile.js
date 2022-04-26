import { updateEmail, updatePassword, updateProfile } from 'firebase/auth';

import { auth, storage } from '../../../firebase-config';

import avatar from '../../../assets/avatar.jpg';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './AuthProfile.module.css';
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { useState } from 'react';
// import image from '../../../assets/avatar.jpg';

const AuthProfile = () => {
    // const [books, setBooks] = useState();
    // const [loading, setLoading] = useState(true);
    const [image, setImage] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);
    // const [photoUrl, setPhotoUrl] = useState(image);

    useEffect(() => {
        if (auth.currentUser?.photoURL) {
            setPhotoUrl(auth.currentUser.photoURL);
        }
    }, []);

    const fileHandler = async (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };
    const uploadHandler = async () => {
        const imageRef = await ref(storage, "wwwimage");
        await uploadBytes(imageRef, image);
        const fileUrl = await getDownloadURL(imageRef);
        // console.log(fileRef)
        setPhotoUrl(fileUrl);
        updateProfile(auth.currentUser, { photoURL: fileUrl });
    };

    const changeEmailHandler = async () => {
        try {
            await updateEmail(auth.currentUser, 'po@po.sx');
            console.log('email updated!!!');
        } catch (err) {
            console.log('change email => FAILED');
            console.log(err);
        }
    };

    const changePasswordHandler = async () => {
        try {
            await updatePassword(auth.currentUser, '555555');
            console.log('password updated!!!');
        } catch (err) {
            console.log('change password => FAILED');
            console.log(err);
        }
    };

    return (
        <Card className={classes['profile_container']} >
            <div className={classes["user-img-wrapper"]}>
                <img src={photoUrl || avatar} alt="" />
                <div className={classes['file-wrapper']}>
                    <input type="file" onChange={fileHandler} />
                    <Button onClick={uploadHandler} className={classes["user-btn"]}>Upload</Button>
                </div>
            </div>
            <div className={classes["user-info"]}>
                <h2>Change your credentials</h2>
                <div className={classes["user-credentials"]}>
                    <label htmlFor='title'>New Email</label>
                    <input type='email' id='email' name='email' />
                    <Button className={classes['user-btn']} onClick={changeEmailHandler}>
                        Change Email
                    </Button>
                </div>
                <div className={classes["user-credentials"]}>
                    <label htmlFor='password'>New Password</label>
                    <input type='password' id='password' name='password' />
                    <Button className={classes['user-btn']} onClick={changePasswordHandler}>
                        Change Password
                    </Button>
                </div>
            </div>
        </Card >
    );
};

export default AuthProfile;