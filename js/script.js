import { Modal } from './modules/modal.js';
import { TabNav } from './modules/tabnav.js';
import { Tooltip } from './modules/tooltip.js';
import { Accordion } from './modules/accordion.js';
import { initOperation } from './modules/operation.js';
import { initMenuMobile } from './modules/menu-mobile.js';
import { initDropdownMenu } from './modules/dropdown-menu.js';
import { initAnimateScroll } from './modules/scroll-animation.js';
import { AnimateNumbers } from './modules/numbers-animation.js';

initOperation();
initMenuMobile();
initDropdownMenu();
initAnimateScroll();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabNav.init();

const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animateNumbers = new AnimateNumbers('[data-numero]', '.numeros', 'active');
animateNumbers.init();
