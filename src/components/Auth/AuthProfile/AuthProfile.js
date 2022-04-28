import { onAuthStateChanged, updateEmail, updatePassword, updateProfile } from 'firebase/auth';

import { storage, auth } from '../../../firebase-config';

import avatar from '../../../assets/avatar.jpg';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './AuthProfile.module.css';
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import useAuth from '../../../hooks/use-hook';

const AuthProfile = () => {
    const currentUser = useAuth();
    const [image, setImage] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPhotoUrl(user.photoURL);
            }
        });
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
        setPhotoUrl(fileUrl);
        updateProfile(currentUser, { photoURL: fileUrl });
    };

    const changeEmailHandler = async () => {
        try {
            await updateEmail(currentUser, 'po@po.sx');
            console.log('email updated!!!');
        } catch (err) {
            console.log('change email => FAILED');
            console.log(err);
        }
    };

    const changePasswordHandler = async () => {
        try {
            await updatePassword(currentUser, '555555');
            console.log('password updated!!!');
        } catch (err) {
            console.log('change password => FAILED');
            console.log(err);
        }
    };

    return (
        <Card className={classes.container} >
            <h1 className={classes['user-title']}>Change your credentials</h1>
            <div className={classes["user-img"]}>
                <div className={classes["user-img-wrapper"]}>
                    <img src={photoUrl || avatar} alt="" />
                </div>
                <div className={classes['user-img-file-wrapper']}>
                    <input id="file-upload" type="file" onChange={fileHandler} />
                    <label htmlFor="file-upload">Choose a file...</label>
                    <Button onClick={uploadHandler} className={classes["user-btn"]}>
                        Upload
                    </Button>
                </div>
            </div>
            <div className={classes["user-info"]}>
                <div className={classes["user-info-credential"]}>
                    <label htmlFor='title'>New Email</label>
                    <input type='email' id='email' name='email' />
                    <Button className={classes['user-btn']} onClick={changeEmailHandler}>
                        Change Email
                    </Button>
                </div>
                <div className={classes["user-info-credential"]}>
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