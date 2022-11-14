import resultStyles from './Result.module.css';
import resultImg from '../images/illustration-thank-you.svg';

function Result(props) {

    
    return (
        <div className={resultStyles.container}>
            <img src={resultImg} className={resultStyles.img}/>
            <div className={resultStyles.choice}>
                <p className={resultStyles.choiceText}>You selected {props.rating} out of 5</p>
            </div>
            <div className={resultStyles.info}>
                <h2 className={resultStyles.title}>Thank You!</h2>
                <p className={resultStyles.text}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    );
}

export default Result;
