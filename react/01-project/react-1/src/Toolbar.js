import styles from './Toolbar.module.css';
import TextBlock from './components/toolbar/TextBlock.js';
import InsertPicture from './components/toolbar/InsertPicture.js';
import Triangle from './components/toolbar/Triangle.js';
import Circle from './components/toolbar/Circle.js';
import Rectangle from './components/toolbar/Rectangle.js';
import FontFamily from './components/toolbar/FontFamily.js';
import FontSize from './components/toolbar/FontSize.js';
import Bold from './components/toolbar/Bold.js';
import Italic from './components/toolbar/Italic.js';
import OrderFront from './components/toolbar/OrderFront.js';
import OrderBack from './components/toolbar/OrderBack.js';


const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      Toolbar
        <TextBlock/>
        <InsertPicture/>
        <Triangle/>
        <Circle />
        <Rectangle/>
        <FontFamily/>
        <FontSize/>
        <Bold/>
        <Italic/>
        <OrderFront/>
        <OrderBack/>
    </div>
  );
}

export default Toolbar;
