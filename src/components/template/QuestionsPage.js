import styles from "./QuestionsPage.module.css"
// import Accordion from '../module/Accordion';
import Faq from '../module/Faq';
import BoxConsulting from '../module/BoxConsulting';

function QuestionsPage() {
  return (
    <div className={styles.container}>

    <Faq />
    <BoxConsulting />
    </div>
    
  )
}

export default QuestionsPage;