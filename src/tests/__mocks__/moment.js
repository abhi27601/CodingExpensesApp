//import  moment  from "moment"; this will import mocked version
const moment =jest.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp)
}
