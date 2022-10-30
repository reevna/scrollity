import styles from './App.module.css';
import ActionMenu from './ActionMenu.js';
import Toolbar from './Toolbar.js';
import Slideview from './Slideview.js';
import Slide from './slide.js';

const App = () => {
  return (
    <div className={styles.app}>
      <ActionMenu/>
      <Toolbar/>
      <Slideview/>
      <Slide/>
    </div>
  );
}

export default App;
