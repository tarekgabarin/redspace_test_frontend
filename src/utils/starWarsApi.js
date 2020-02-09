import {baseUrl} from '../constants/constants';
import axios from 'axios'

export function getPersonInfo(id){
   return axios.get(baseUrl + id)
}