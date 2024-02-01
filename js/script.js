import { Modal } from './modules/modal.js';
import { TabNav } from './modules/tabnav.js';
import { Tooltip } from './modules/tooltip.js';
import { SlideNav } from './modules/slideNav.js';
import { Accordion } from './modules/accordion.js';
import { Operation } from './modules/operation.js';
import { MenuMobile } from './modules/menu-mobile.js';
import { DropdownMenu } from './modules/dropdown-menu.js';
import { AnimateScroll } from './modules/scroll-animation.js';
import { AnimateNumbers } from './modules/numbers-animation.js';

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

const animateScroll = new AnimateScroll("[data-anime='scroll']");
animateScroll.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const operation = new Operation('[data-semana]');
operation.init();

const slideNav = new SlideNav({
  slide: '.slide',
  wrapper: '.wrapper',
});

slideNav.addControl('.custom-controls');
