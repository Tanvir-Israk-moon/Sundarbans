/*
 * Vimeo Video Player Controls - TODO: Manually create .min.js version
 */

function addCustomVideoPlayer(videoContainer, videoControls) {
	//console.log('videoContainer', videoContainer);
	if (!videoContainer) {
		return;
	}
	var iframe = videoContainer.querySelector('iframe');
	var player = new Vimeo.Player(iframe);
	//console.log('iframe', iframe);
	var playClass = 'playing';
	var pauseClass = 'paused';

	var controls = videoControls || document.querySelector('.vimeo-controls');
	var buttonPlay = controls.querySelector('.play');
	var buttonPause = controls.querySelector('.pause');

	if (player) {
		player.ready().then(function () {
			player.on('play', function () {
				videoContainer.classList.add(playClass);
				videoContainer.classList.remove(pauseClass);
				controls.classList.add(playClass);
			});

			/*
			if (videoContainer.classList.contains('is-autoplay')) {
				player.play();
			} else {
				player.pause();
			}
			*/

			player.on('progress', function () {
				videoContainer.classList.add(playClass);
				controls.classList.add(playClass);
				player.off('progress');
				player.on('play', function () {
					videoContainer.classList.add(playClass);
					controls.classList.add(playClass);
					buttonPause.tabIndex = 0;
					buttonPlay.tabIndex = -1;
				});
			});

			player.on('pause', function () {
				videoContainer.classList.remove(playClass);
				videoContainer.classList.add(pauseClass);
				controls.classList.remove(playClass);
				buttonPlay.tabIndex = 0;
				buttonPause.tabIndex = -1;
			});

			if (controls) {
				if (buttonPlay) {
					buttonPlay.addEventListener('click', function () {
						player.play();
					});
				}
				if (buttonPause) {
					buttonPause.addEventListener('click', function () {
						player.pause();
					});
				}
			}
		});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	// Video Blocks
	var videoContainers = document.querySelectorAll('.hero--vimeo-container');
	if (videoContainers) {
		for (var i = 0, l = videoContainers.length; i < l; i++) {
			addCustomVideoPlayer(videoContainers[i]);
		}
	}
});
