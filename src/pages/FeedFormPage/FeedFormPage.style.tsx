import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      width: 'min-content',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'justify',
    },
    alert: {
      marginTop: '16px',
    },
    button: {
      marginLeft: '16px',
    },
    formButtons: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }),
);