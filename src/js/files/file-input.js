// Кастомный input[type=file] с отображением имени файла и удалением
// Сниппет (HTML): file-input

function initFileInputs() {
	const wrappers = document.querySelectorAll('.file-input');
	if (!wrappers.length) return;

	wrappers.forEach((wrapper) => {
		const control = wrapper.querySelector('.file-input__control');
		const status = wrapper.querySelector('.file-input__status');
		const removeBtn = wrapper.querySelector('.file-input__remove');
		if (!control || !status) return;

		const defaultStatus = status.textContent;

		control.addEventListener('change', () => {
			const file = control.files && control.files[0];
			if (file) {
				status.textContent = file.name;
				wrapper.classList.add('file-input_filled');
			} else {
				status.textContent = defaultStatus;
				wrapper.classList.remove('file-input_filled');
			}
		});

		if (removeBtn) {
			removeBtn.addEventListener('click', (e) => {
				e.preventDefault();
				e.stopPropagation();
				control.value = '';
				status.textContent = defaultStatus;
				wrapper.classList.remove('file-input_filled');
			});
		}
	});
}

initFileInputs();
