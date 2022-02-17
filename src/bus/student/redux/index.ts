type InitVals = {
    firstName: string;
    surname: string;
    age: string;
    email: string;
    sex: string;
    speciality: string;
}

const initialState = {
    student: null,
};

export const studentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'UPLOAD_STUDENT_PROFILE':
            return {
                ...state,
                student: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};
