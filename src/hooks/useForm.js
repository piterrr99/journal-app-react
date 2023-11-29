import { useEffect, useMemo, useState } from 'react'


export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(()=>{
        createValidators()
    }, [formState])

    useEffect(()=>{
        setFormState(initialForm);        
    }, []);

    const isFormValid = useMemo(()=>{

        for (const formValue of Object.keys(formValidation)){
            if (formValidation[formValue] !== null) return false
        };

        return true;
    }, [formValidation]);




    const reset = ( newFormState = initialForm )=>{
        setFormState(newFormState);
    };

    const handleInputChange = ({target})=>{
        
          setFormState({
            ...formState,
            [target.name]: target.value
        });  
    };

    const createValidators = ()=> {

        const formCheckedValues = {};

        for (const formField of Object.keys(formValidations)){

            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMessage;
        };

        setFormValidation(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        handleInputChange,
        reset,

        ...formValidation,
        isFormValid
    };

}
