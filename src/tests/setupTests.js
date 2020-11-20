import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log("executing enzyme")
Enzyme.configure({ adapter: new Adapter() });
require('dotenv').config({path: '.env.test'})