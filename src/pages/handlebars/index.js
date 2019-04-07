import { renderFragment } from "../../utils/render";
import template from './template.handlebars';


export function render(container) {
  renderFragment(container, template({data}));
}

const data = {
 template: 'handlebars',
 name: 'Dima',
 lang: 'Javascript',
}





