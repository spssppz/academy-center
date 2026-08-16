// Кастомный select
// Сниппет (HTML): custom-sel

function initCustomSelects() {
	const selects = document.querySelectorAll('.custom-sel');
	if (!selects.length) return;

	selects.forEach((select) => {
		const btn = select.querySelector('.custom-sel__btn');
		const value = select.querySelector('.custom-sel__value');
		const options = select.querySelectorAll('.custom-sel__sub button');
		if (!btn) return;

		btn.addEventListener('click', () => {
			const isOpen = select.classList.contains('custom-sel_open');
			selects.forEach(item => item.classList.remove('custom-sel_open'));
			if (!isOpen) select.classList.add('custom-sel_open');
		});

		options.forEach((option) => {
			option.addEventListener('click', () => {
				const text = option.textContent.trim();
				btn.textContent = text;
				if (value) value.value = text;
				select.classList.remove('custom-sel_open');
			});
		});
	});

	document.addEventListener('click', (e) => {
		if (e.target.closest('.custom-sel')) return;
		selects.forEach(select => select.classList.remove('custom-sel_open'));
	});
}

initCustomSelects();
