import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
export default class SigninController extends Controller {
    @service session;
    @tracked error;
    @tracked username;
    @tracked password;
    @action
    async login(event){
        event.preventDefault();
        let { username, password } = this;
        try{
            await this.session.authenticate('authenticator:token',username,password);
        }catch(error){
            this.error=error;
        }
    }
    // @action
    // update(attr,event){
    //     this.[attr]=event.target.value;
    // }
    @action
  updateUsername(event) {
    this.username = event.target.value;
  }

  @action
  updatePassword(event) {
    this.password = event.target.value;
  }
}
