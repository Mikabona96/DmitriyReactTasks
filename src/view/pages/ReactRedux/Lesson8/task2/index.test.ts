import { peopleReducer } from '../../../../../bus/people/reducer';

const initialState = {
    data:          null,
    isFetching:    false,
    error:         null,
    currentPerson: null,
};

const action = {
    type:    'PEOPLE_START_FETCHING',
    payload: 'fdd',
};


test('sdsdsddsdsdsd', () => {
    expect(peopleReducer(initialState, action)).toMatchSnapshot();
});
