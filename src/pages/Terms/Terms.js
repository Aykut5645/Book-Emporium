import Card from "../../components/UI/Card/Card";

import classes from './Terms.module.css';

const Terms = () => {
    return (
        <Card className={classes.container}>
            <h1>Terms and Conditions</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis tempora placeat recusandae? Asperiores eligendi debitis porro quasi, eius nemo ab deleniti nesciunt praesentium autem veritatis perferendis similique deleniti nesciunt praesentium autem veritatis perferendis similique</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis tempora placeat recusandae? Asperiores eligendi debitis porro quasi, eius nemo ab deleniti nesciunt praesentium autem veritatis perferendis similique deleniti nesciunt praesentium autem veritatis perferendis similique</p>
            <h2>Conditions</h2>
            <ol>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                <li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
                <li>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</li>
                <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>It is a long established fact that a reader will be distracted by the readable content.</li>
                    <li>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</li>
                </ul>
            </ol>
        </Card>
    );
};

export default Terms;