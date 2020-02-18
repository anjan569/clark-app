/* eslint-disable no-console */
/* eslint-disable no-undef */
import Route from '@ember/routing/route';
import { action } from "@ember/object"; 
export default class QuestionnaireRoute extends Route {

    
    async model() {
        let response = await fetch('/api/questionnaire.json');
        let { questionnaire } =await response.json();
        console.log('info', questionnaire.questions);
        return questionnaire.questions;
    }


    @action
    finish(data) {
      console.log(data);
      this.transitionToRoute('index');
    }

}
