import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { DuckFeedData } from "../../types/types";
import { useDuckFeedThunks } from "../../store/duckFeed/thunks";
import FeedFormPage from "./FeedFormPage";

export function useFeedForm() {
    const validationSchema = useMemo(() => (
      yup.object().shape({
        parkName: yup.string().required('Park Name is required'),
        country: yup.string().required('Country is required'),
        food: yup.string().required('Food used is required'),
        foodType: yup.string().required('Food Type is required'),
        foodQuantity: yup.number().positive().required('Food Quantity is required to be greater than zero'),
        ducksCount: yup.number().positive().required('Ducks Count is required to be greater than zero'),
        time: yup.date().required('Date and time is required'),
      })
    ), []);
     
    const { register, handleSubmit, formState: { errors } } = useForm<DuckFeedData>({
      resolver: yupResolver(validationSchema)
    });

    const thunks = useDuckFeedThunks(useDispatch());
     
    const onSubmit = useCallback((formValues: DuckFeedData) => {
      thunks.resetDuckFeedState();
      thunks.sendDuckFeedData(formValues);
    }, []);

    const onScheduleSubmit = useCallback((formValues: DuckFeedData) => {
      thunks.resetDuckFeedState();
      thunks.createSchedule(formValues);
    }, []);
     
    return {
      onRegister: register,
      errors,
      onSubmit: handleSubmit(onSubmit),
      onScheduleSubmit: handleSubmit(onScheduleSubmit),
    }
}

const FeedFormPageContainer = () => {
  return (
    <FeedFormPage {...useFeedForm()}/>
  );
}

export default FeedFormPageContainer;