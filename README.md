**Features and Details (English)**

Stamiku Video Player

Stamiku is a modern, feature-rich HTML5 video player built with pure JavaScript. It provides a sleek interface with comprehensive controls while maintaining lightweight performance. Perfect for websites, blogs, and web applications looking for a customizable video playback solution.
Key Features

**Modern Interface**: Clean, responsive design with customizable primary color

**Comprehensive Controls**: Play/pause, volume control, fullscreen, playback speed

**Auto Position Memory**: Automatically remembers and resumes from the last viewing position

**Intro Skip**: Automatically identifies and provides option to skip intro sections

**Keyboard Shortcuts**: Space/K (play/pause), F (fullscreen), M (mute), arrow keys (skip)

**Skip Animations**: Visual animation when skipping forward or backward

**Mobile-Friendly**: Responsive design adapts to all screen sizes

**Customizable**: Primary color, intro settings, and other options

**Implementation**
Include the script in your HTML:
```html
 <script src="https://player.stamiku.com/js13-31.js"></script>
```
 
Create a container for the player:
```html
 <div id="video-player"></div>
```

**Initialize the player**:
```javascript
 const player = Stamiku.createPlayer('#video-player', {
    src: 'path/to/video.mp4',
    primaryColor: '#ff0000',
    intro: {
        enabled: true,
        startTime: 30,
        endTime: 90
    }
  });
```

**API Methods**

The player provides multiple methods for controlling playback programmatically:

**play()**: Starts playback

**pause()**: Pauses playback

**togglePlay()**: Toggles between play and pause

**mute() / unmute()**: Controls audio

**setVolume(level)**: Sets volume (0-1)

**setTime(seconds)**: Jumps to specific position

**toggleFullScreen()**: Toggles fullscreen mode

**setPlaybackRate(rate)**: Changes playback speed


**Browser Support**

Stamiku Player is compatible with all modern browsers including Chrome, Firefox, Safari, and Edge.

**Stamiku** is distributed under the MIT license.

© 2025 **Stamiku**. All rights reserved.


**Özellikler ve Detaylar (Türkçe)**

Stamiku Video Oynatıcı

Stamiku, saf JavaScript ile oluşturulmuş modern ve özellik açısından zengin bir HTML5 video oynatıcısıdır. Hafif performansını korurken kapsamlı kontroller sunan şık bir arayüz sağlar. Özelleştirilebilir video oynatma çözümü arayan web siteleri, bloglar ve web uygulamaları için mükemmeldir.

**Temel Özellikler**

**Modern Arayüz**: Temiz, duyarlı tasarım ve özelleştirilebilir ana renk

**Kapsamlı Kontroller**: Oynat/duraklat, ses kontrolü, tam ekran, oynatma hızı

**Otomatik Pozisyon Hatırlama**: Son izleme konumunu otomatik olarak hatırlar ve devam eder

**İntro Atlama**: Giriş bölümlerini otomatik olarak tanımlar ve atlama seçeneği sunar

**Klavye Kısayolları**: Space/K (oynat/duraklat), F (tam ekran), M (sessiz), ok tuşları (atlama)

**Atlama Animasyonları**: İleri veya geri atlarken görsel animasyon

**Mobil Uyumlu**: Duyarlı tasarım tüm ekran boyutlarına uyum sağlar

**Özelleştirilebilir**: Ana renk, intro ayarları ve diğer seçenekler

**Kurulum**

HTML'inize scripti ekleyin:
```html
 <script src="https://player.stamiku.com/js13-31.js"></script>
 ```

Oynatıcı için bir konteyner oluşturun:
```html
 <div id="video-player"></div>
```

Oynatıcıyı başlatın:
```javascript
 const player = Stamiku.createPlayer('#video-player', {
    src: 'video/yolu.mp4',
    primaryColor: '#ff0000',
    intro: {
        enabled: true,
        startTime: 30,
        endTime: 90
    }
  });
```

**API Methodları**
Oynatıcı, programatik olarak kontrol için birden fazla metod sağlar:

**play()**: Oynatmayı başlatır

**pause()**: Oynatmayı duraklatır

**togglePlay()**: Oynat ve duraklat arasında geçiş yapar

**mute() / unmute()**: Sesi kontrol eder

**setVolume(level)**: Ses seviyesini ayarlar (0-1)

**setTime(seconds)**: Belirli bir konuma atlar

**toggleFullScreen()**: Tam ekran modunu açar/kapatır

**setPlaybackRate(rate)**: Oynatma hızını değiştirir

**Tarayıcı Desteği**
Stamiku Player, Chrome, Firefox, Safari ve Edge dahil tüm modern tarayıcılarla uyumludur.


**Stamiku**, MIT lisansı altında dağıtılmaktadır.

© 2025 **Stamiku**. Tüm hakları saklıdır.
