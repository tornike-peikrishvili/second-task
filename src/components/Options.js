import optionStyles from './Options.module.css';
import CardInfo from './CardInfo';
import Result from './Result';
import {useState} from 'react'

function Options() {
    let optArray = ["1", "2", "3", "4", "5"];
    
    let [rating, setRating] = useState();

    let [BfResult, setBfResult] = useState(false);
    let [hide, setHide] = useState(false);
    let handleClickHide = () => {
        setHide(current => !current);
    };

    return (
        <div className={optionStyles.container}>    
            <div className={optionStyles.subContainer}>
                {BfResult ? <Result rating = {rating}/> :  <CardInfo/>}
                {hide ? 
                    ''
                :  
                    <div 
                    className={optionStyles.btnContainer}>
                        {optArray.map((opt, index) => {
                        return <button className={optionStyles.btn}
                        onClick= {() => {
                            setRating(opt)
                        }}
                        
                        key={index}
                        
                        >{opt}</button>
                        })}
                    </div>
                }

                <button className={optionStyles.submitBtn}
                    style={{
                        display: hide ? 'none' : '',
                    }}
                    onClick={() => {
                        setBfResult(true);
                        setHide(handleClickHide);
                    }}
                >SUBMIT</button>
            </div>
        </div>
    );
}

export default Options;

