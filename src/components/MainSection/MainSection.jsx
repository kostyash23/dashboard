import React from 'react';
import tonyImg from '../../assets/img/client/tony.png';
import btnMore from '../../assets/img/buttonMore.svg';
import arrowDrop from '../../assets/img/arrow_drop_up.svg';
import sircleEdit from '../../assets/img/sircleEdit.svg';
import addSircle from '../../assets/img/add_circle.svg';
import delBtn from '../../assets/img/delete.svg';
import moreHoriz from '../../assets/img/more_horiz.svg';
import checkSmall from '../../assets/img/check_small.svg';
import graf from '../../assets/img/graf.png';
import folder from '../../assets/img/folder.svg';
import moreIcon from '../../assets/img/moreGray.svg';
import cloud from '../../assets/img/cloud.png';
import classNames from 'classnames';
import styles from './MainSection.module.sass';

const MainSection = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.headerMainWrapper}>
            <div className={styles.headerMain}>
               <div className={styles.headerInfo}>
                  <img src={tonyImg} alt='' />
                  <div className={styles.navigation}>
                     <div className={styles.nameDashboard}>
                        <h2 className={styles.name}>Tony Soprano</h2>
                        <div className={styles.dashboard}>
                           Dashboard
                           <img src={arrowDrop} alt='' />
                        </div>
                     </div>
                     <div className={styles.btnMore}>
                        <div className={styles.labelList}>
                           <div className={styles.label}>Form</div>
                           <div className={styles.label}>Lifeline</div>
                           <div className={styles.label}>Notes</div>
                           <div className={styles.label}>Treatment plan</div>
                           <div className={styles.label}>Statistic</div>
                           <div className={styles.label}>Analysis</div>
                        </div>
                        <img src={btnMore} alt='' />
                     </div>
                  </div>
               </div>
            </div>
            <div className={styles.center}></div>
         </div>
         <div className={styles.midleSection}>
            <div className={styles.midleSectionLeft}>
               <div className={styles.statistics}>
                  <div className={styles.topStatistics}>
                     <div className={styles.wrapLeft}>
                        <div className={styles.blueStat}>
                           <h2 className={styles.number}>108</h2>
                           <p className={styles.text}>sessions completed</p>
                        </div>
                        <div className={styles.orangeStat}>
                           <h2 className={styles.number}>7</h2>
                           <p className={styles.text}>
                              improvements <br />
                              noticed
                           </p>
                        </div>
                     </div>
                     <div className={styles.purpureStat}>
                        <img src={cloud} alt='' />
                        <h3 className={styles.subTitle}>Open Mindmap</h3>
                        <p className={styles.text}>
                           see the most <br /> common Tony <br /> behaviour patterns
                        </p>
                     </div>
                  </div>
                  <div className={styles.bottomStatistics}>
                     <div className={styles.bottomStatisticsLeft}>
                        <div className={styles.greenStat}>
                           <div className={styles.greenStatText}>
                              <h2 className={styles.number}>10</h2>
                              <p className={styles.text}>Active trackers</p>
                           </div>
                           <img src={graf} alt='' />
                        </div>
                     </div>
                     <img src={sircleEdit} className={styles.sircleEdit} alt='' />
                  </div>
               </div>
               <div className={styles.tasks}>
                  <div className={styles.headerTasks}>
                     <h2 className={styles.headerTasksTitle}>Tasks</h2>
                     <div className={styles.viewTodo}>
                        <p>View full ToDo list</p>
                        <img src={arrowDrop} alt='' />
                     </div>
                  </div>
                  <div className={styles.toDoList}>
                     <div className={styles.toDoItem}>
                        <div className={styles.toDoItemWrapTop}>
                           <div className={styles.checkboxblock}>
                              <input className={styles.checkbox} type='checkbox' />
                              <div>Send a scheme</div>
                           </div>
                           <div className={styles.labelToDo}>
                              <div className={styles.labelToDoFile}>file</div>
                              <img src={arrowDrop} alt='' />
                           </div>
                        </div>
                     </div>
                     <div className={styles.toDoItem}>
                        <div className={styles.toDoItemWrapTop}>
                           <div className={styles.checkboxblock}>
                              <input className={styles.checkbox} type='checkbox' />
                              <div>Read a transcription</div>
                           </div>
                           <div className={styles.labelToDo}>
                              <div className={styles.labelToDoTips}>tips</div>
                              <img src={arrowDrop} alt='' />
                           </div>
                        </div>

                        <div className={styles.toDoDescription}>
                           <p className={styles.toDoDescriptionText}>
                              Transcription for the last session is ready. Read it to see a new tips and patterns!
                           </p>
                           <div className={styles.delBtn}>
                              <img src={delBtn} alt='' />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.addBtn}>
                     <img src={addSircle} alt='' />
                     <span> Add a new task </span>
                  </div>
               </div>
            </div>
            <div className={styles.midleSectionRight}>
               <div className={styles.upcomingSesion}>
                  <div className={styles.headerUpcomingSesion}>
                     <h2 className={styles.headerUpcomingSesionTitle}>Upcoming sessions</h2>
                     <div className={styles.viewEdit}>
                        <p>Edit schedule</p>
                        <img src={arrowDrop} alt='' />
                     </div>
                  </div>
                  <div className={styles.sessionList}>
                     <div className={styles.sessionItem}>
                        <div className={styles.data}>Wednesday, 17.07</div>
                        <div className={styles.statusWrap}>
                           <div className={classNames(styles.status, styles.statusUpcoming)}>
                              <img src={moreHoriz} alt='' /> <div>Upcoming</div>
                           </div>
                           <img className={styles.arrowDrop} src={arrowDrop} alt='' />
                        </div>
                     </div>
                     <div className={styles.sessionItem}>
                        <div className={styles.data}>Sunday, 12.07</div>
                        <div className={styles.statusWrap}>
                           <div className={classNames(styles.status, styles.statusFinished)}>
                              <img src={checkSmall} alt='' /> <div>Finished</div>
                           </div>
                           <img className={styles.arrowDrop} src={arrowDrop} alt='' />
                        </div>
                     </div>
                  </div>
               </div>
               <div className={styles.analysis}>
                  <h2 className={styles.analysisTitle}>Analysis</h2>
                  <div className={styles.analysisList}>
                     <div className={styles.analysisItem}>
                        <div className={styles.wrapFoldText}>
                           <img src={folder} alt='' />
                           <div className={styles.wrapText}>
                              <div className={styles.analysisItemName}>General</div>
                              <div className={styles.analysisData}>24 Aug</div>
                           </div>
                        </div>
                        <div className={styles.moreGray}>
                           <img src={moreIcon} alt='' />
                        </div>
                     </div>
                     <div className={styles.analysisItem}>
                        <div className={styles.wrapFoldText}>
                           <img src={folder} alt='' />
                           <div className={styles.wrapText}>
                              <div className={styles.analysisItemName}>General</div>
                              <div className={styles.analysisData}>24 Aug</div>
                           </div>
                        </div>
                        <div className={styles.moreGray}>
                           <img src={moreIcon} alt='' />
                        </div>
                     </div>
                     <div className={styles.analysisItem}>
                        <div className={styles.wrapFoldText}>
                           <img src={folder} alt='' />
                           <div className={styles.wrapText}>
                              <div className={styles.analysisItemName}>General</div>
                              <div className={styles.analysisData}>24 Aug</div>
                           </div>
                        </div>
                        <div className={styles.moreGray}>
                           <img src={moreIcon} alt='' />
                        </div>
                     </div>
                     <div className={styles.analysisItem}>
                        <div className={styles.wrapFoldText}>
                           <img src={folder} alt='' />
                           <div className={styles.wrapText}>
                              <div className={styles.analysisItemName}>General</div>
                              <div className={styles.analysisData}>24 Aug</div>
                           </div>
                        </div>
                        <div className={styles.moreGray}>
                           <img src={moreIcon} alt='' />
                        </div>
                     </div>
                     <div className={styles.analysisItem}>
                        <div className={styles.wrapFoldText}>
                           <img src={folder} alt='' />
                           <div className={styles.wrapText}>
                              <div className={styles.analysisItemName}>General</div>
                              <div className={styles.analysisData}>24 Aug</div>
                           </div>
                        </div>
                        <div className={styles.moreGray}>
                           <img src={moreIcon} alt='' />
                        </div>
                     </div>
                  </div>
                  <div className={styles.addBtn}>
                     <img src={addSircle} alt='' />
                     <span> Add a new task </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MainSection;
