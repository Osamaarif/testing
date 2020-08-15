import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

export default function SimplePaper() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Paper elevation="3">
            "space-hippie-2-volt":
                name: "SPACE-HIPPIE-02-VOLT",
                img: "https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/5343cbb8-5e23-45f2-9236-0ebe6f14d65e/space-hippie-02-volt-this-is-trash-release-date.jpg"
          }
        </Paper>
      <Paper />
      <Paper elevation={3} />
    </div>
    );
}
