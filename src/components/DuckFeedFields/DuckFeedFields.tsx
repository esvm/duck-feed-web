import { TextField } from "@material-ui/core";
import { DuckFeedFeatureConfig } from "../../types/types";
import { useStyles } from "./DuckFeedFields.style";

type DuckFeedFormProps = {
  config: DuckFeedFeatureConfig;
};

const DuckFeedFields = (props: DuckFeedFormProps) => {
  const { config: { onRegister, errors } } = props;
  const classes = useStyles();
  return (
    <>
      <TextField
        data-testid="parkName"
        label="Park Name *"
        fullWidth={true}
        error={!!errors.parkName}
        helperText="Name of the park"
        className={classes.field}
        {...onRegister('parkName')}/>

      <TextField
        data-testid="country"
        label="Country *"
        fullWidth={true}
        error={!!errors.country}
        helperText="Park's Country"
        className={classes.field}
        {...onRegister('country')}/>

      <TextField
        data-testid="food"
        label="Food *"
        fullWidth={true}
        error={!!errors.food}
        helperText="Name of Food used"
        className={classes.field}
        {...onRegister('food')}/>

      <TextField
        data-testid="foodType"
        label="Food Type *"
        fullWidth={true}
        error={!!errors.foodType}
        helperText="Type of food used"
        className={classes.field}
        {...onRegister('foodType')}/>

      <TextField
        data-testid="foodQuantity"
        label="Food Quantity *"
        fullWidth={true}
        error={!!errors.foodQuantity}
        helperText="Quantity of given food (measure in grams)"
        className={classes.field}
        {...onRegister('foodQuantity')}/>

      <TextField
        data-testid="ducksCount"
        label="Ducks fed *"
        fullWidth={true}
        error={!!errors.ducksCount}
        helperText="Quantity of ducks fed"
        className={classes.field}
        {...onRegister('ducksCount')}/>

      <TextField
        data-testid="time"
        label="Fed time"
        fullWidth={true}
        error={!!errors.time}
        helperText="Time of ducks were fed"
        className={classes.field}
        {...onRegister('time')}
        type="datetime-local"/>
    </>
  );
}

export default DuckFeedFields;