import { initModal } from './modules/modal.js';
import { initTabNav } from './modules/tabnav.js';
import { initTooltip } from './modules/tooltip.js';
import { Accordion } from './modules/accordion.js';
import { initOperation } from './modules/operation.js';
import { initMenuMobile } from './modules/menu-mobile.js';
import { initDropdownMenu } from './modules/dropdown-menu.js';
import { initAnimateScroll } from './modules/scroll-animation.js';
import { initAnimateNumbers } from './modules/numbers-animation.js';

initModal();
initTabNav();
initTooltip();
initOperation();
initMenuMobile();
initDropdownMenu();
initAnimateScroll();
initAnimateNumbers();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();
