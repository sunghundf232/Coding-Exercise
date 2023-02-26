import { addMenu } from './add.js';
// 여기에 코드를 작성하세요
//addMenu(men);
import { deleteMenuByIndex as deleteMenu } from '../mission5-2_answer/delete.js';

const data = [];
const addBtn = document.querySelector('.add-btn');
const addInput = document.querySelector('.add-input');
const list = document.querySelector('.list');

addBtn.addEventListener('click', () => addMenu(data));
addInput.addEventListener('keypress', (e) => e.code === 'Enter' && addMenu(data));
list.addEventListener('click', ({ target }) => target.tagName === 'BUTTON' && deleteMenu(data, target.dataset.index));
