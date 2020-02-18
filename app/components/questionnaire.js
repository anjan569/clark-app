/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class QuestionnaireComponent extends Component {
    
    @action
    double(amount) {
      console.log(amount);
      
    }
 }
