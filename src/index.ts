import { User } from './classes/User';
import { Company } from './classes/Company';
import { Map } from './classes/Map';

const user = new User();
const company = new Company();
const newMap = new Map('map');

newMap.addMarker(user);
newMap.addMarker(company);