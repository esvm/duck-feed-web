import { Button, Snackbar } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { CSVLink } from 'react-csv'
import { useDispatch, useSelector } from "react-redux";
import Alert from '@material-ui/lab/Alert';
import { getDuckFeedData } from "../../store/duckFeed/thunks";
import { getDuckFeedReportFormSubmitted, getDuckFeedReportFormError } from "../../store/duckFeed/selectors";
import { useStyles } from "./FeedFormPage.style";
import { DuckFeedData } from "../../types/types";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import FeedForm from "../../components/FeedForm/FeedForm";

type DuckFeedFormProps = {
  onRegister: UseFormRegister<DuckFeedData>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  onScheduleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  errors: DeepMap<DuckFeedData, FieldError>;
};


const FeedFormPage = (props: DuckFeedFormProps) => {
  const { onRegister, onSubmit, onScheduleSubmit, errors } = props;
  const classes = useStyles();
  const csvLink = useRef<CSVLink>();
  const [duckFeedsData, setDuckFeedsData] = useState([] as DuckFeedData[]);

  const submitSuccess = useSelector(getDuckFeedReportFormSubmitted);
  const submitError = useSelector(getDuckFeedReportFormError);
  const [isSuccessOpen, setIsSuccessOpen] = useState(submitSuccess);
  const [isErrorOpen, setIsErrorOpen] = useState(submitError);

  useEffect(() => {
    setIsSuccessOpen(submitSuccess);
  }, [submitSuccess]);

  useEffect(() => {
    setIsErrorOpen(submitError);
  }, [submitError]);

  const onSuccessClose = () => {
    setIsSuccessOpen(false);
  }

  const onErrorClose = () => {
    setIsErrorOpen(false);
  }

  const generateReport = async() => {
    const duckFeeds = await getDuckFeedData();
    setDuckFeedsData(duckFeeds || []);
    csvLink.current.link.click();
  }

  const renderFeedback = () => {
    return (
      <>
        <Snackbar open={isSuccessOpen} autoHideDuration={3000} onClose={onSuccessClose}>
          <Alert severity="success">
            Duck Feed reported with success!
          </Alert>
        </Snackbar>
        <Snackbar open={isErrorOpen} autoHideDuration={3000} onClose={onErrorClose}>
          <Alert severity="error">
            Fail to report Duck Feed. Please try again!
          </Alert>
        </Snackbar>
      </>
    );
  }

  return (
    <div className={classes.grid}>
      <FeedForm config={{ onRegister, errors }}/>
      <div className={classes.formButtons}>
        <Button 
          variant="contained"
          color="primary"
          type="submit"
          onClick={onSubmit}>
            Submit
        </Button>

        <Button 
          className={classes.button}
          variant="contained" 
          color="secondary"
          type="submit"
          onClick={onScheduleSubmit}>
            Schedule
        </Button>

        <Button 
          className={classes.button}
          variant="contained" 
          color="default"
          onClick={generateReport}>
            Generate report
        </Button>
      </div>
      
      <CSVLink
        data={duckFeedsData}
        filename='duck_feeds_report.csv'
        className='hidden'
        ref={csvLink}
        target='_blank'/>

      {renderFeedback()}
    </div>
  );
}

export default FeedFormPage;