// Запуск видео по клику
// Сниппет (HTML): <div class="video" data-video="files/video.mp4">
// 	<img class="video__preview" src="" alt="">
// 	<button class="video__btn" type="button"></button>
// </div>

function initVideo() {
	const videos = document.querySelectorAll('.video[data-video]');
	videos.forEach((video) => {
		const btn = video.querySelector('.video__btn');
		if (!btn) return;
		btn.addEventListener('click', () => {
			const player = document.createElement('video');
			player.className = 'video__player';
			player.src = video.dataset.video;
			player.controls = true;
			player.autoplay = true;
			player.playsInline = true;
			video.append(player);
			video.classList.add('video_playing');
			player.play();
		}, { once: true });
	});
}

initVideo();
