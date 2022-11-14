import cardStyle from './Card.module.css';
import Options from './Options'

function Card() {
  return (
      <div className={cardStyle.card}>
            <div className={cardStyle.container}>
                <Options/>
            </div>
      </div>
  );
}

export default Card;
