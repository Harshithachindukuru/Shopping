import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class EditRoute extends Route {
    @service store;
   async model(params){
        return await this.store.findRecord('item',params.id);
      }
}
