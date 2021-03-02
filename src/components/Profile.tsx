import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

    return(
      <div className={styles.profileContainer}>
        <img src="https://github.com/kpmnta.png" alt="Kai Pimenta" />
          <div>
            <strong>Kai Pimenta</strong>
            <p>
              <img src="icons/level.svg" alt="icone de level" />
              Level { level }
            </p>
          </div>
      </div>
    ) 
}