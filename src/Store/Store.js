import firebase from "../Firebase/Config"
import  Reducer from "../Rudeucers/Reducers"
import {  createStore } from "redux";




 var store = createStore(Reducer)




export default store