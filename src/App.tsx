import './App.css';
import FeedFormPage from '../src/pages/FeedFormPage'
import { AppBar, Typography } from '@material-ui/core';
import { useStyles } from './App.styles';

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Typography variant="h5" className={classes.title}>
          Duck Feed Form
        </Typography>
      </AppBar>
      <FeedFormPage />
    </div>
  );
}

export default App;
