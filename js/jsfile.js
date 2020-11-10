 /*"use strict"*/
let but1 = document.querySelector('.button1');
but1.onclick = function(){
	alert('Данный автореферат написан по ВКР Землянского М.В. в 2020г.'+'\n'+'Автор предоставляет свободное право использования и распространнения информации указанной в тексте! '+'\n' + 'Сама ВКР была написана на кафедре "Информационные процессы и управление" в 2020г. Весь материал был предоставлен ТГТУ и ПАО "Пигмент". В работе использовались средства автоматизации разрабатываемые компанией ОВЕН в 2020 году.');
};
let stDiz = document.querySelector('.stDiz');
let theme = document.querySelector('.theme');
let TeloLabiOld = document.querySelector ('.TeloLabiOld');
	header = document.querySelector('.header');
	end = document.querySelector('.end');
	up = document.querySelector('.up')
	heading = document.querySelector('.heading')
	
theme.onclick = function(){
	  stDiz.classList.toggle('newDiz');
TeloLabiOld.classList.toggle('TeloLabiNew');
	 header.classList.toggle('headerNew');
	end.classList.toggle('endNew');
	up.classList.toggle('upNew');
	heading.classList.toggle('.headingNew');	/* Заголовок */
};