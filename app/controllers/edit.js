import Controller from '@ember/controller';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
export default class EditController extends Controller {
    @action
    async edit(event){
event.preventDefault();
let edit=await this.model;
edit.save().then (()=>{
    this.transitionToRoute('product');
});
    }
}
