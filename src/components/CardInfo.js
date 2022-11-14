import infoStyles from './CardInfo.module.css';
import star from '../images/icon-star.svg'

function CardInfo() {
  return (
      <div className={infoStyles.container}>
            <div className={infoStyles.favBtn}>
                <img src={star} alt='star icon'/>
            </div>
            <div className={infoStyles.text}>
                <h1 className={infoStyles.title}>How did we do?</h1>
                <p className={infoStyles.description}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
      </div>
  );
}

export default CardInfo;
