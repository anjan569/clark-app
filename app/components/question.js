/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class QuestionComponent extends Component {
  
    
   
    @action
    toggleOption(option) {
        
        console.log(option);
        
    }

}
 