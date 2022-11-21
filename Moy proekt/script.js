const buttonSort = document.getElementById("sortirovka");
let baza = [];
const proverka = () => {
	switch (spisok.children.length) {
		case 0:
			spisok.style.display = 'none'; return;
		default: spisok.style.display = 'block'
	}
};
proverka()
const dobavitZadachu = () => {
	if (baza.includes(+vvod.value) || baza.includes(vvod.value)) {
		alert('Povtor')
	}
	else if (vvod.value != '' && vvod.value != +vvod.value)
		baza.push(vvod.value);
	else if (vvod.value != '' && vvod.value == +vvod.value) {
		baza.push(+vvod.value);
	}
	pokazatSpisok();
};
const pokazatSpisok = () => {
	spisok.innerHTML = '';
	baza.forEach((item) => {
		const li = document.createElement('li');
		const span = document.createElement('span');
		spisok.appendChild(li);
		li.appendChild(span);
		span.innerText = item;
		vvod.value = '';
		const del = document.createElement('button');
		del.innerText = '∅';
		li.appendChild(del);
		proverka()
	});
	const delButton = document.querySelectorAll('li button');
	delButton.forEach((item) => {
		item.addEventListener('click', (ev) => {
			ev.target.parentElement.remove();
			const i = ev.target.previousElementSibling.innerText;
			baza = baza.filter((item) => {
				return item == i ? null : item;
			});
			proverka();
		});
	});
	proverka();
};

let flag = 1
sortirovka.addEventListener('click', () => {
	switch (flag) {
		case 1: baza = baza.sort((a, b) => a < b ? 1 : -1)
			buttonSort.classList.remove("green");
			buttonSort.classList.add("red");
			flag = 0;
			break;
		case 0: baza = baza.sort((a, b) => a > b ? 1 : -1)
			buttonSort.classList.remove("red");
			buttonSort.classList.add("green");
			flag = 1;
			break;
	}
	pokazatSpisok()
})
const Udalit = () => {
	baza = []
	spisok.innerHTML = ''
	spisok.style.display = 'none'
}
document.addEventListener('keyup', (ev) => ev.key === 'Enter' ? dobavitZadachu() : null)
dobavit.addEventListener('click', dobavitZadachu)
udalit.addEventListener('click', Udalit)