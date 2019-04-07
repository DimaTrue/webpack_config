import index from './index.pug';
import { renderFragment } from "../../utils/render";


export function render(container) {
  renderFragment(container, index);
}




