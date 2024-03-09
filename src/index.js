console.log('hello World');

const sumFile=require('./sum2');
import style from './css/index.scss';
console.log(sumFile.sum(1,2));

const sumFile2=require('./sum3');
console.log(sumFile2.sum(1,2,3));

let title=document.querySelector(`#demo`);
title.innerHTML = `wynik: ${sumFile.sum(1,2)}`;