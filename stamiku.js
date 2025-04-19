/**
 * stamiku v1.0
 */

(function(window) {
  "use strict";
  
  const Stamiku = {};
  
  const Icons = {
    play: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
    pause: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
    volume: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>',
    mute: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>',
    fullscreen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
    exitFullscreen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
    skipForward: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>',
    skipBack: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>',
    settings: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    arrowLeft: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
    arrowRight: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'
  };

  const CSS = `
.stamiku-player {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  background-color: #000;
  border-radius: 8px;
  aspect-ratio: 16/9;
}

.stamiku-player video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
}

.stamiku-controls {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 16px;
  padding-top: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%);
  z-index: 30;
  transition: opacity 0.3s, transform 0.3s;
}

.stamiku-controls.hidden {
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
}

.stamiku-progress-container {
  width: calc(100% - 32px);
  height: 8px;
  padding: 0;
  margin: 0 16px 12px 16px;
  position: relative;
}

.stamiku-progress-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.stamiku-progress {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background-color: var(--stamiku-primary, #ff0000);
  border-radius: 2px;
  transition: width 0.1s;
}

.stamiku-progress-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--stamiku-primary, #ff0000);
  transition: transform 0.2s;
  z-index: 2;
  cursor: grab;
}

.stamiku-progress-thumb:hover {
  transform: translate(-50%, -50%) scale(1.2);
}

.stamiku-control-items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.stamiku-control-left,
.stamiku-control-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stamiku-btn {
  background: transparent;
  border: none;
  color: white;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.stamiku-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}



.stamiku-volume-container {
  display: flex;
  align-items: center;
  position: relative;
}

.stamiku-volume-slider {
  width: 0;
  height: 15px;
  opacity: 0;
  transition: width 0.3s, opacity 0.3s;
  appearance: none;
  background: transparent;
  cursor: pointer;
}

.stamiku-volume-container:hover .stamiku-volume-slider {
  width: 80px;
  opacity: 1;
}

.stamiku-volume-slider::-webkit-slider-runnable-track {
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.stamiku-volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--stamiku-primary, #ff0000);
  margin-top: -4px;
}

.stamiku-volume-slider::-moz-range-track {
  height: 3px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.stamiku-volume-slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--stamiku-primary, #ff0000);
  border: none;
}

.stamiku-big-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.stamiku-big-play-btn:hover {
  background-color: rgba(255, 0, 0, 0.9);
  transform: translate(-50%, -50%) scale(1.1);
}

.stamiku-settings-panel {
  position: absolute;
  bottom: 60px;
  right: 10px;
  background-color: rgba(28, 28, 28, 0.9);
  border-radius: 4px;
  padding: 12px;
  width: 200px;
  z-index: 9999;
  transform-origin: bottom right;
  transform: scale(0.9);
  opacity: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  pointer-events: none;
}

.stamiku-settings-panel.stamiku-visible {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}



.stamiku-settings-title {
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.stamiku-settings-speeds {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  margin-bottom: 12px;
}

.stamiku-speed-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 2px;
  padding: 4px;
  font-size: 12px;
  cursor: pointer;
}

.stamiku-speed-btn.active {
  background-color: var(--stamiku-primary, #ff0000);
  color: white;
}

.stamiku-shortcuts {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}

.stamiku-shortcut-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.stamiku-shortcut-key {
  font-family: monospace;
}

.stamiku-time {
  color: white;
  font-size: 14px;
  font-family: Arial, sans-serif;
  margin-left: 8px;
}

.stamiku-skip-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 24px;
  display: flex;
  align-items: center;
  animation: pulse 0.8s ease-in-out;
}

.stamiku-skip-text {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-left: 8px;
  margin-right: 8px;
}

.stamiku-intro-skip {
  position: absolute;
  bottom: 96px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: 1px solid var(--stamiku-primary, #ff0000);
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  z-index: 20;
  display: flex;
  align-items: center;
  gap: 8px;
}

.stamiku-intro-skip:hover {
  background-color: #000;
}

.stamiku-hidden {
  display: none !important;
}

.stamiku-time-tooltip {
  position: absolute;
  bottom: 20px;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px;
  font-family: Arial, sans-serif;
  white-space: nowrap;
  pointer-events: none;
  z-index: 40;
}

.stamiku-context-menu {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 4px;
  z-index: 9999;
}

@keyframes pulse {
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
}
  `;

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }
  
  function getCookie(name) {
    const cookieName = `${name}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }

  Stamiku.createPlayer = function(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) {
      console.error('Stamiku: Belirtilen element bulunamadı:', selector);
      return null;
    }

    const defaultOptions = {
      src: '',
      autoplay: false,
      muted: false,
      loop: false,
      controls: true,
      primaryColor: '#ff0000',
      intro: {
        enabled: false,
        startTime: 0,
        endTime: 0
      }
    };

    const settings = Object.assign({}, defaultOptions, options);
    
    document.documentElement.style.setProperty('--stamiku-primary', settings.primaryColor);

    if (!document.getElementById('stamiku-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'stamiku-styles';
      styleElement.textContent = CSS;
      document.head.appendChild(styleElement);
    }

    container.innerHTML = `
      <div class="stamiku-player">
        <video 
          src="${settings.src}" 
          ${settings.autoplay ? 'autoplay' : ''} 
          ${settings.muted ? 'muted' : ''} 
          ${settings.loop ? 'loop' : ''}
        ></video>
        
        <div class="stamiku-controls">
          <div class="stamiku-progress-container">
            <div class="stamiku-progress-bar">
              <div class="stamiku-progress" style="width: 0%;"></div>
              <div class="stamiku-progress-thumb" style="left: 0%;"></div>
            </div>
          </div>
          
          <div class="stamiku-control-items">
            <div class="stamiku-control-left">
              <button class="stamiku-btn stamiku-skip-back-btn">${Icons.skipBack}</button>
              <button class="stamiku-btn stamiku-play-btn">${Icons.play}</button>
              <button class="stamiku-btn stamiku-skip-forward-btn">${Icons.skipForward}</button>
              <span class="stamiku-time">0:00 / 0:00</span>
            </div>
            
            <div class="stamiku-control-right">
              <div class="stamiku-volume-container">
                <button class="stamiku-btn stamiku-volume-btn">${settings.muted ? Icons.mute : Icons.volume}</button>
                <input type="range" class="stamiku-volume-slider" min="0" max="1" step="0.05" value="${settings.muted ? 0 : 1}">
              </div>
              
              <button class="stamiku-btn stamiku-settings-btn">${Icons.settings}</button>
              <button class="stamiku-btn stamiku-fullscreen-btn">${Icons.fullscreen}</button>
            </div>
          </div>
        </div>
        
        <button class="stamiku-big-play-btn">${Icons.play}</button>
        
        <div class="stamiku-settings-panel stamiku-hidden">
          <div class="stamiku-settings-title">Oynatma Hızı</div>
          <div class="stamiku-settings-speeds">
            ${[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(speed => 
              `<button class="stamiku-speed-btn ${speed === 1 ? 'active' : ''}" data-speed="${speed}">${speed}x</button>`
            ).join('')}
          </div>
          
          <div class="stamiku-settings-title">Kısayollar</div>
          <div class="stamiku-shortcuts">
            <div class="stamiku-shortcut-row">
              <span>Oynat/Duraklat:</span>
              <span class="stamiku-shortcut-key">Space, K</span>
            </div>
            <div class="stamiku-shortcut-row">
              <span>İleri/Geri:</span>
              <span class="stamiku-shortcut-key">←→</span>
            </div>
            <div class="stamiku-shortcut-row">
              <span>Tam Ekran:</span>
              <span class="stamiku-shortcut-key">F</span>
            </div>
            <div class="stamiku-shortcut-row">
              <span>Sessiz:</span>
              <span class="stamiku-shortcut-key">M</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    const player = container.querySelector('.stamiku-player');
    const video = player.querySelector('video');
    const controls = player.querySelector('.stamiku-controls');
    const playBtn = player.querySelector('.stamiku-play-btn');
    const bigPlayBtn = player.querySelector('.stamiku-big-play-btn');
    const volumeBtn = player.querySelector('.stamiku-volume-btn');
    const volumeSlider = player.querySelector('.stamiku-volume-slider');
    const fullscreenBtn = player.querySelector('.stamiku-fullscreen-btn');
    const settingsBtn = player.querySelector('.stamiku-settings-btn');
    const settingsPanel = player.querySelector('.stamiku-settings-panel');
    const skipBackBtn = player.querySelector('.stamiku-skip-back-btn');
    const skipForwardBtn = player.querySelector('.stamiku-skip-forward-btn');
    const speedBtns = player.querySelectorAll('.stamiku-speed-btn');
    const timeDisplay = player.querySelector('.stamiku-time');
    const progressBar = player.querySelector('.stamiku-progress-bar');
    const progress = player.querySelector('.stamiku-progress');
    const progressThumb = player.querySelector('.stamiku-progress-thumb');
    
    let isPlaying = false;
    let isMuted = settings.muted;
    let showControls = true;
    let controlsTimeout;
    let isFullScreen = false;
    let currentVolume = isMuted ? 0 : 1;
    let skipAnimationTimeout;
    let introSkipBtn = null;
    
    video.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      
      const menuDiv = document.createElement('div');
      menuDiv.className = 'stamiku-context-menu';
      menuDiv.style.cssText = `
        left: ${event.pageX}px;
        top: ${event.pageY}px;
      `;
      menuDiv.textContent = 'Stamiku v1.0';
      document.body.appendChild(menuDiv);
      
      document.addEventListener('click', function closeMenu() {
        if (document.body.contains(menuDiv)) {
          document.body.removeChild(menuDiv);
        }
        document.removeEventListener('click', closeMenu);
      });
    });

    progressBar.addEventListener('mousemove', function(event) {
      const rect = progressBar.getBoundingClientRect();
      const pos = (event.clientX - rect.left) / rect.width;
      const timeInSeconds = pos * video.duration;
      
      const existingTooltip = progressBar.querySelector('.stamiku-time-tooltip');
      if (existingTooltip) {
        existingTooltip.remove();
      }
      
      const tooltip = document.createElement('div');
      tooltip.className = 'stamiku-time-tooltip';
      tooltip.style.left = `${event.clientX - rect.left}px`;
      
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      tooltip.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
      
      progressBar.appendChild(tooltip);
    });

    progressBar.addEventListener('mouseleave', function() {
      const tooltip = progressBar.querySelector('.stamiku-time-tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });

    if (settings.intro && settings.intro.enabled) {
      introSkipBtn = document.createElement('button');
      introSkipBtn.className = 'stamiku-intro-skip stamiku-hidden';
      introSkipBtn.innerHTML = `<span>İntroyu Atla</span>${Icons.skipForward}`;
      player.appendChild(introSkipBtn);
    }
    
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
    }
    
    function updateProgressBar() {
      if (video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        progress.style.width = `${percent}%`;
        progressThumb.style.left = `${percent}%`;
        
        timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        
        if (settings.intro && settings.intro.enabled && introSkipBtn) {
          const isInIntro = (video.currentTime >= settings.intro.startTime && video.currentTime < settings.intro.endTime);
          introSkipBtn.classList.toggle('stamiku-hidden', !isInIntro);
        }
      }
    }
    
    function togglePlay() {
      if (video.paused) {
        video.play().then(() => {
          isPlaying = true;
          playBtn.innerHTML = Icons.pause;
          bigPlayBtn.classList.add('stamiku-hidden');
          showControlsTemporarily();
        }).catch(error => {
          console.error('Stamiku: Video oynatma hatası:', error);
        });
      } else {
        video.pause();
        isPlaying = false;
        playBtn.innerHTML = Icons.play;
        bigPlayBtn.classList.remove('stamiku-hidden');
        showControls = true;
        controls.classList.remove('hidden');
      }
    }
  
    function toggleMute() {
      if (video.muted) {
        video.muted = false;
        video.volume = currentVolume;
        volumeBtn.innerHTML = Icons.volume;
        volumeSlider.value = currentVolume;
        isMuted = false;
      } else {
        video.muted = true;
        volumeBtn.innerHTML = Icons.mute;
        volumeSlider.value = 0;
        isMuted = true;
      }
    }
    
    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        player.requestFullscreen().catch(err => {
          console.error('Stamiku: Tam ekran hatası:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }
    
    function showControlsTemporarily() {
      showControls = true;
      controls.classList.remove('hidden');
      
      clearTimeout(controlsTimeout);
      
      if (isPlaying) {
        controlsTimeout = setTimeout(() => {
          showControls = false;
          controls.classList.add('hidden');
        }, 3000);
      }
    }
    
    function skipTime(seconds) {
      const newTime = video.currentTime + seconds;
      skipToTime(newTime);
      showSkipAnimation(seconds > 0 ? 'right' : 'left');
    }
    
    function skipToTime(timeInSeconds) {
      video.currentTime = Math.max(0, Math.min(timeInSeconds, video.duration));
      updateProgressBar();
    }
    
    function showSkipAnimation(direction) {
      clearTimeout(skipAnimationTimeout);
      
      const existingAnimation = player.querySelector('.stamiku-skip-animation');
      if (existingAnimation) {
        player.removeChild(existingAnimation);
      }
      
      const skipAnimation = document.createElement('div');
      skipAnimation.className = 'stamiku-skip-animation';
      
      if (direction === 'right') {
        skipAnimation.innerHTML = `${Icons.arrowRight}<span class="stamiku-skip-text">10s</span>`;
      } else {
        skipAnimation.innerHTML = `${Icons.arrowLeft}<span class="stamiku-skip-text">10s</span>`;
      }
      
      player.appendChild(skipAnimation);
      
      skipAnimationTimeout = setTimeout(() => {
        if (skipAnimation.parentNode === player) {
          player.removeChild(skipAnimation);
        }
      }, 800);
    }
    
    function setPlaybackSpeed(speed) {
      video.playbackRate = speed;
      
      speedBtns.forEach(btn => {
        btn.classList.toggle('active', parseFloat(btn.dataset.speed) === speed);
      });
    }
    
    function toggleSettings() {
      if (settingsPanel.classList.contains('stamiku-visible')) {
        settingsPanel.classList.remove('stamiku-visible');
        setTimeout(() => {
          settingsPanel.classList.add('stamiku-hidden');
        }, 200);
      } else {
        settingsPanel.classList.remove('stamiku-hidden');
        requestAnimationFrame(() => {
          settingsPanel.classList.add('stamiku-visible');
        });
      }
    }

    function loadSavedPosition() {
      const savedPosition = getCookie(`stamiku_position_${btoa(settings.src)}`);
      if (savedPosition) {
        const time = parseFloat(savedPosition);
        if (!isNaN(time) && time > 0 && time < video.duration) {
          video.currentTime = time;
          updateProgressBar();
        }
      }
    }
    
    function savePosition() {
      if (video.currentTime > 0) {
        setCookie(`stamiku_position_${btoa(settings.src)}`, video.currentTime, 30);
      }
    }
    
    video.addEventListener('timeupdate', updateProgressBar);
    
    video.addEventListener('loadedmetadata', () => {
      timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
      loadSavedPosition();
    });
    
    video.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      togglePlay();
    });
    
    video.addEventListener('play', () => {
      isPlaying = true;
      playBtn.innerHTML = Icons.pause;
      bigPlayBtn.classList.add('stamiku-hidden');
    });
    
    video.addEventListener('pause', () => {
      isPlaying = false;
      playBtn.innerHTML = Icons.play;
      bigPlayBtn.classList.remove('stamiku-hidden');
    });
    
    video.addEventListener('volumechange', () => {
      if (video.muted || video.volume === 0) {
        volumeBtn.innerHTML = Icons.mute;
        volumeSlider.value = 0;
      } else {
        volumeBtn.innerHTML = Icons.volume;
        volumeSlider.value = video.volume;
        currentVolume = video.volume;
      }
    });
    
    playBtn.addEventListener('click', togglePlay);
    bigPlayBtn.addEventListener('click', togglePlay);
    volumeBtn.addEventListener('click', toggleMute);
    fullscreenBtn.addEventListener('click', toggleFullScreen);
    skipBackBtn.addEventListener('click', () => skipTime(-10));
    skipForwardBtn.addEventListener('click', () => skipTime(10));
    
    if (introSkipBtn) {
      introSkipBtn.addEventListener('click', () => {
        if (settings.intro && settings.intro.enabled) {
          skipToTime(settings.intro.endTime);
          showSkipAnimation('right');
        }
      });
    }
    
    volumeSlider.addEventListener('input', () => {
      const volume = parseFloat(volumeSlider.value);
      video.volume = volume;
      video.muted = volume === 0;
      
      if (volume === 0) {
        volumeBtn.innerHTML = Icons.mute;
        isMuted = true;
      } else {
        volumeBtn.innerHTML = Icons.volume;
        currentVolume = volume;
        isMuted = false;
      }
    });
    
    settingsBtn.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleSettings();
      return false;
    });
    
    document.addEventListener('click', (event) => {
      if (!settingsPanel.classList.contains('stamiku-hidden') && 
          !settingsPanel.contains(event.target) && 
          event.target !== settingsBtn) {
        settingsPanel.classList.remove('stamiku-visible');
        setTimeout(() => {
          settingsPanel.classList.add('stamiku-hidden');
        }, 200);
      }
    });
    
    settingsPanel.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    
    speedBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const speed = parseFloat(btn.dataset.speed);
        setPlaybackSpeed(speed);
        setTimeout(() => {
          settingsPanel.classList.remove('stamiku-visible');
          setTimeout(() => {
            settingsPanel.classList.add('stamiku-hidden');
          }, 200);
        }, 100);
      });
    });
    
    progressBar.addEventListener('click', (event) => {
      const rect = progressBar.getBoundingClientRect();
      const pos = (event.clientX - rect.left) / rect.width;
      skipToTime(pos * video.duration);
    });
    
    player.addEventListener('mousemove', showControlsTemporarily);
    
    player.addEventListener('mouseleave', () => {
      if (isPlaying) {
        setTimeout(() => {
          showControls = false;
          controls.classList.add('hidden');
        }, 1000);
      }
    });
    
    document.addEventListener('fullscreenchange', () => {
      isFullScreen = !!document.fullscreenElement;
      fullscreenBtn.innerHTML = isFullScreen ? Icons.exitFullscreen : Icons.fullscreen;
    });
    
    document.addEventListener('keydown', (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }
      
      if (event.code === 'Space' || event.key === ' ' || event.key.toLowerCase() === 'k') {
        event.preventDefault();
        togglePlay();
        return;
      }
      
      switch (event.key.toLowerCase()) {
        case 'f':
          event.preventDefault();
          toggleFullScreen();
          break;
        case 'arrowright':
          event.preventDefault();
          skipTime(10);
          break;
        case 'arrowleft':
          event.preventDefault();
          skipTime(-10);
          break;
        case 'm':
          event.preventDefault();
          toggleMute();
          break;
      }
    });
    
    const savePositionInterval = setInterval(() => {
      if (video.currentTime > 0 && !video.paused) {
        savePosition();
      }
    }, 5000);
    
    window.addEventListener('beforeunload', savePosition);
    
    window.addEventListener('unload', () => {
      clearInterval(savePositionInterval);
    });
    
    if (settings.autoplay) {
      togglePlay();
    }
    
    return {
      play: () => { video.play(); },
      pause: () => { video.pause(); },
      togglePlay: togglePlay,
      
      mute: () => {
        video.muted = true;
        volumeBtn.innerHTML = Icons.mute;
        volumeSlider.value = 0;
      },
      unmute: () => {
        video.muted = false;
        video.volume = currentVolume;
        volumeBtn.innerHTML = Icons.volume;
        volumeSlider.value = currentVolume;
      },
      setVolume: (level) => {
        const volume = Math.max(0, Math.min(1, level));
        video.volume = volume;
        volumeSlider.value = volume;
        if (volume > 0) {
          video.muted = false;
          volumeBtn.innerHTML = Icons.volume;
        } else {
          video.muted = true;
          volumeBtn.innerHTML = Icons.mute;
        }
      },
      getVolume: () => video.volume,
      
      setTime: (time) => { skipToTime(time); },
      getCurrentTime: () => video.currentTime,
      getDuration: () => video.duration,
      
      setPlaybackRate: setPlaybackSpeed,
      getPlaybackRate: () => video.playbackRate,
      
      toggleFullScreen: toggleFullScreen,
      toggleSettings: toggleSettings,
      isPlaying: () => !video.paused,
      isPaused: () => video.paused,
      
      savePosition: savePosition,
      
      getElements: () => ({
        player,
        video,
        controls,
        settingsPanel
      })
    };
  };
  
  window.Stamiku = Stamiku;
})(window);
