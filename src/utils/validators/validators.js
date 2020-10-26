export const required = (value) => {
        if (value) return undefined
        return 'FieldComponent is required'
    },

    maxLengthCreator = (maxLength) => (value) => {
        if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`
        return undefined
    }

