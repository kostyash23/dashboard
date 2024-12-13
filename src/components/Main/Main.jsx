import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Main.module.sass';
import MainSection from '../MainSection/MainSection';

const Main = () => {
   return (
      <div className={styles.main}>
         <Sidebar />
         <MainSection />
      </div>
   );
};

export default Main;
