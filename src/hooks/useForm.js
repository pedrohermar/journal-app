import { useEffect, useState, useMemo } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({})

    useEffect( () => {
        createValidators();
    }, [formState])

    useEffect( () => {
        setFormState(initialForm);
    }, [initialForm])

    const isFormValid = useMemo( () => {

        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false
        }

        return true;
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckValues = {}

        for (const formField of Object.keys( formValidations )) {
            // Desestructuramos la función y el codigo de error de cada validación basado en el formField
            const [ fn, errorMessage ] = formValidations[formField];

            // Guarda en el objeto formCheckValues con la llave del el valor de null si cumple la condición de la función o el errorMessage si no lo hace
            formCheckValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckValues );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation, 
        isFormValid
    }
}