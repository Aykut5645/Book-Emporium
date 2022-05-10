import Card from "../../components/UI/Card/Card";

import classes from './About.module.css';

import bookImg from '../../assets/about-books.jpg';

const About = () => {
    return (
        <Card className={classes.container}>
            <div className={classes['books-info']}>
                <h1>About Us</h1>
                <p>Book Emporium is an internet platform that offers mediation between those who sell and those who are looking for books to buy.</p>
                <div className={classes['books-img-wrapper']} >
                    <img src={bookImg} alt="" />
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </Card >
    );
};

export default About;