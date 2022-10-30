import styles from './ActionMenu.module.css';
import Open from './components/actionMenu/Open.js';
import Save from './components/actionMenu/Save.js';
import View from './components/actionMenu/View.js';
import AddNewSlide from './components/actionMenu/AddNewSlide.js';
import DeleteSlide from './components/actionMenu/DeleteSlide.js';
import Undo from './components/actionMenu/Undo.js';
import Redo from './components/actionMenu/Redo.js';


const ActionMenu = () => {
  return (
    <div className={styles.actionMenu}>
       Action
        <Open/>
        <Save/>
        <View />
        <AddNewSlide/>
        <DeleteSlide/>
        <Undo/>
        <Redo/>
    </div>
  );
}

export default ActionMenu;
