import { peopleActions } from '../../../../../bus/people/actions';


test('startFetching ahould return Object {type: PEOPLE_START_FETCHING}', () => {
    expect(peopleActions.startFetching()).toMatchSnapshot();
});
test('stopFetching ahould return Object {type: PEOPLE_STOP_FETCHING}', () => {
    expect(peopleActions.stopFetching()).toMatchSnapshot();
});
test('fill ahould return Object {type: PEOPLE_FILL, payload}', () => {
    expect(peopleActions.fill('er')).toMatchSnapshot();
});
test('setCurrentPerson ahould return {type: PEOPLE_START_FETCHING, payload}', () => {
    expect(peopleActions.setCurrentPerson('er')).toMatchSnapshot();
});
test('setFetchingError ahould return {type: PEOPLE_START_FETCHING}', () => {
    expect(peopleActions.setFetchingError(404)).toMatchSnapshot();
});
