import React from 'react';
import compass from '../../assets/img/compass.svg';
import tonyImg from '../../assets/img/client/tony.png';
import mariaImg from '../../assets/img/Maria.png';
import laurImg from '../../assets/img/Laur.png';
import editIcon from '../../assets/img/edit.svg';
import pin from '../../assets/img/pin.png';
import bulb from '../../assets/img/bulb.png';
import arrowDrop from '../../assets/img/arrow_drop_up.svg';
import styles from './Sidebar.module.sass';

const Sidebar = () => {
   return (
      <div className={styles.sidebar}>
         <div className={styles.topSidebar}>
            <div className={styles.compass}>
               <img src={compass} alt='' />
            </div>
            <div className={styles.topText}>
               <h2 className={styles.topTextTitle}>Desktop</h2>
               <p className={styles.topTextDesk}>Start screen</p>
            </div>
         </div>
         <div className={styles.clienSchedule}>
            <div className={styles.wrapperBtn}>
               <div className={styles.btnAllClient}>All clients</div>
               <div className={styles.btnSchedule}>Schedule</div>
            </div>
            <div className={styles.listClient}>
               <div className={styles.itemClient}>
                  <div className={styles.itemClientTop}>
                     <img src={tonyImg} alt='tony' />
                     <div className={styles.clientInformation}>
                        <h2 className={styles.clientName}>Tony Soprano</h2>
                        <div className={styles.days}>
                           <div className={styles.clientDay}>WED 12:30</div>
                           <div className={styles.clientDay}>SUN 12:30</div>
                           <div className={styles.editDay}>
                              <img src={editIcon} alt='' />
                              <img src={arrowDrop} alt='' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.listArticle}>
                     <div className={styles.itemArticle}>
                        <div className={styles.article}>
                           <img src={pin} alt='' /> Send Robers a scheme
                        </div>
                        <div className={styles.article}>
                           <img src={bulb} alt='' /> Send Robers a scheme
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.itemClient}>
                  <div className={styles.itemClientTop}>
                     <img src={laurImg} alt='tony' />
                     <div className={styles.clientInformation}>
                        <h2 className={styles.clientName}>Laur Somey</h2>
                        <div className={styles.days}>
                           <div className={styles.clientDay}>WED 13:30</div>
                           <div className={styles.clientDay}>SAT 10:30</div>
                           <div className={styles.editDay}>
                              <img src={editIcon} alt='' />
                              <img src={arrowDrop} alt='' />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.itemClient}>
                  <div className={styles.itemClientTop}>
                     <img src={mariaImg} alt='tony' />
                     <div className={styles.clientInformation}>
                        <h2 className={styles.clientName}>Tony Soprano</h2>
                        <div className={styles.days}>
                           <div className={styles.clientDay}>WED 13:30</div>
                           <div className={styles.clientDay}>SAT 10:30</div>
                           <div className={styles.editDay}>
                              <img src={editIcon} alt='' />
                              <img src={arrowDrop} alt='' />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
