const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
          const volumeBtn = $('.btn-volume')
          const volume = $('.inputVolume')
          const repeatBtn = $('.btn-repeat')
          const randomBtn = $('.btn-random')
          const prevBtn = $('.btn-prev')
          const nextBtn = $('.btn-next')
          const progress = $('#progress')
          const player = $('.player')
          const platBtn = $('.btn-toggle-play')
          const heading = $('header h2')
          const thumbCD = $('.cd-thumb')
          const audio = $('#audio')
          const cd = $('.cd');
          const listNew = $('.listMusicNew')
          const listNew1 = $('.listMusicNew1')
          const listNew2 = $('.listMusicNew2')
          const listNew3 = $('.listMusicNew3')
          const chooseSong = document.getElementsByClassName('.song')
          const search = $('.search')
          const playlist = $('.playlist')
          const tabs = $('.tabs')
          console.log(tabs)
        
        var valueVolume;
        
        
          
       



const app = {

    isPlaying: false,
    isRandom: false,
    currentSongindex: 0,
    isRpeat: false,
    isVolume: false,


    listSong: [
        {
            name: 'Tướng Quân',
            singer: 'Đình Dũng',
            img: './img/img1.jpg',
            linkMusic: './music/song1.mp3'
        },
        {
            name: 'Ái Nộ',
            singer: 'Công Đẹp zai',
            img: './img/img2.jpg',
            linkMusic: './music/song2.mp3'
        },
        {
            name: 'Cưới Nhau Thôi',
            singer: 'Công hot boy',
            img: './img/img3.jpg',
            linkMusic: './music/song3.mp3'
        },
    ],

    songs : [
        {
            name: 'Tướng Quân',
            singer: 'Đình Dũng',
            img: './img/img1.jpg',
            linkMusic: './music/song1.mp3'
        },
        {
            name: 'Ái Nộ',
            singer: 'Công Đẹp zai',
            img: './img/img2.jpg',
            linkMusic: './music/song2.mp3'
        },
        {
            name: 'Cưới Nhau Thôi',
            singer: 'Công hot boy',
            img: './img/img3.jpg',
            linkMusic: './music/song3.mp3'
        },
    ],
    songs1 : [
        {
            name: 'Yêu Đừng Sợ Đau',
            singer: 'Công hot boy',
            img: './img/img3.jpg',
            linkMusic: './music/song4.mp3'
        },
        {
            name: 'Thức Giấc',
            singer: 'Công hot boy',
            img: './img/img3.jpg',
            linkMusic: './music/song5.mp3'
        },
        {
            name: 'Forget Me Now',
            singer: 'Công hot boy',
            img: './img/img3.jpg',
            linkMusic: './music/song6.mp3'
        },
    ],
    songs2 : [
        {
            name: 'Unity Neone Remix',
            singer: 'Alan x Walkers',
            img: './img/img3.jpg',
            linkMusic: './music/Alan x Walkers  Unity Neone Remix.mp3'
        },
        {
            name: 'Heat Waves',
            singer: ' Glass Animals X Highcloud Mashup',
            img: './img/img3.jpg',
            linkMusic: './music/Heat Waves  Glass Animals X Highcloud Mashup.mp3'
        },
        {
            name: 'Waiting For Love',
            singer: 'Avicii',
            img: './img/img3.jpg',
            linkMusic: './music/song9.mp3'
        },
        {
            name: 'Radiohead',
            singer: 'Ember Island',
            img: './img/img3.jpg',
            linkMusic: './music/Radiohead.mp3'
        },
    ],
    songs3 : [
        {
            name: 'Người theo đuổi ánh sáng',
            singer: 'công đẹp zai',
            img: './img/img3.jpg',
            linkMusic: './music/Người theo đuổi ánh sáng  Từ Vi.mp3'
        },
        {
            name: 'Kara Một triệu khả năng',
            singer: 'công hot boy',
            img: './img/img3.jpg',
            linkMusic: './music/Kara Một triệu khả năng  .mp3'
        },
        {
            name: 'Chầm chậm thích anh.mp3',
            singer: 'công đẹp zai',
            img: './img/img3.jpg',
            linkMusic: './music/Chầm chậm thích anh.mp3'
        },
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentSongindex ? 'active' : ''}" data-index = "${index}">
            <div class="thumb" style="background-image: url('${song.img}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },

    defineProperties: function () {
         Object.defineProperty(app, 'currentSong', {
             get: function () {
                 return app.songs[app.currentSongindex]
             }
         }) 

    },

    loadCurrentsong: function () {
          
          heading.textContent = this.currentSong.name;
          thumbCD.style.backgroundImage = `url('${this.currentSong.img}')`
          audio.src = this.currentSong.linkMusic

    },

    handleEvents: function () {
            const widthCd = cd.offsetWidth
               

            // CD quoay
            const CDthumbanimate = thumbCD.animate([
                {transform:'rotate(360deg)'}
            ], {
                duration: 10000,
                iterations: Infinity,
            })
            CDthumbanimate.pause()

            platBtn.onclick = function () {

                 if (app.isPlaying) {
                   app.isPlaying = false
                    audio.pause()
                    player.classList.remove('playing')
                    CDthumbanimate.pause()
                 }else{
                    app.isPlaying = true
                    audio.play()
                    player.classList.add('playing')
                    CDthumbanimate.play()
                 }

                 
            }

            audio.ontimeupdate = function () {
                if (audio.duration) {
                    const progressPersent = audio.currentTime / audio.duration * 100
                    progress.value = progressPersent
                }

            }
            progress.onchange = function (e) {

                const seekTime = audio.duration * (e.target.value / 100)
                audio.currentTime = seekTime
            }
            
            volume.oninput = function (e) {
                valueVolume = e.target.value / 100
                if(valueVolume !== 0) {
                    audio.volume = valueVolume
                    volumeBtn.classList.remove('active')
                }else {
                    audio.volume = 0
                    volumeBtn.classList.add('active')
                }
            }

           
            
            volumeBtn.onclick = function () {
                    if(valueVolume){
                        if(app.isVolume) {
                            app.isVolume = false
                            volumeBtn.classList.remove('active') 
                            audio.muted = false  
                            audio.volume =  valueVolume
                            volume.value = valueVolume * 100         
                        }else if (valueVolume === 0) {
                            volumeBtn.classList.remove('active')
                            audio.volume = 1
                            volume.value = 100
                        }
                        else {
                            app.isVolume = true
                            volumeBtn.classList.add('active')
                            audio.muted = true
                            volume.value = 0
                        }
            }else {
                if(app.isVolume) {
                    app.isVolume = false
                    volumeBtn.classList.remove('active') 
                    audio.muted = false  
                    audio.volume =  1  
                    volume.value = 100       
                }else {
                    app.isVolume = true
                    volumeBtn.classList.add('active')
                    audio.muted = true
                    volume.value = 0
                }
            }
        }
            
         listNew.onclick = function () {
            for(var i = 0; i <= app.songs.length + 1; i++) {
                console.log(app.songs.pop())
            }
            app.songs1.forEach(function (value) {
                app.songs.push(value)
            })
            listNew1.classList.remove('main')
            listNew2.classList.remove('main')
            listNew3.classList.remove('main')
            listNew.classList.add('main')
            
            app.currentSongindex = 0
            progress.value = 0
            CDthumbanimate.pause()
            app.loadCurrentsong()
            // CDthumbanimate.play()
            audio.pause()
            player.classList.remove('playing')
            app.render()
         }

         listNew1.onclick = function () {
             for(var i = 0; i <= app.songs.length + 1; i++) {
                 console.log(app.songs.pop())
             }
             app.listSong.forEach(function (value) {
                 app.songs.push(value)
             })
            listNew.classList.remove('main')
            listNew3.classList.remove('main')
            listNew2.classList.remove('main')
            listNew1.classList.add('main')
            
            app.currentSongindex = 0
            progress.value = 0
            CDthumbanimate.pause()
            app.loadCurrentsong()
            // CDthumbanimate.play()
            audio.pause()
            player.classList.remove('playing')
            app.render()
         }

         listNew2.onclick = function () {
            for(var i = 0; i <= app.songs.length + 1; i++) {
                console.log(app.songs.pop())
            }
            app.songs2.forEach(function (value) {
                app.songs.push(value)
            })
           listNew1.classList.remove('main')
           listNew.classList.remove('main')
           listNew3.classList.remove('main')
           listNew2.classList.add('main')

           
           app.currentSongindex = 0
           progress.value = 0
           CDthumbanimate.pause()
           app.loadCurrentsong()
           // CDthumbanimate.play()
           audio.pause()
           player.classList.remove('playing')
           app.render()
         }

         listNew3.onclick = function () {
            for(var i = 0; i <= app.songs.length + 1; i++) {
                console.log(app.songs.pop())
            }
            app.songs3.forEach(function (value) {
                app.songs.push(value)
            })
           listNew1.classList.remove('main')
           listNew.classList.remove('main')
           listNew2.classList.remove('main')
           listNew3.classList.add('main')

           
           app.currentSongindex = 0
           progress.value = 0
           CDthumbanimate.pause()
           app.loadCurrentsong()
           // CDthumbanimate.play()
           audio.pause()
           player.classList.remove('playing')
           app.render()
         }

         playlist.onclick = function (e) {
             const songNode = e.target.closest('.song:not(.active)')

             if (songNode || e.target.closest('.option')) {
                  if (songNode) {
                     app.currentSongindex = Number(songNode.dataset.index)
                     app.loadCurrentsong()
                     app.render()
                     CDthumbanimate.play()
                     player.classList.add('playing')
                     audio.play()
                  }
                  if (e.target.closest('.option')) {
                     console.log(123)
                  }
             }
         }

         

        //  search

        // search.oninput = function (e) {
             
        // }

        // search.onkeyup = function (e) {
        //        console.log(e.which)
        //        switch(e.which) {
        //            case 13:
        //                console.log()

        //        }
        // }


            document.onscroll = function () {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;

                const newCdwidth = widthCd - scrollTop;
                cd.style.width = newCdwidth > 0 ? newCdwidth + 'px' : 0;
                cd.style.opacity = newCdwidth / widthCd;
            }

            // khi next bài hát
            nextBtn.onclick = function () {
                if(app.isRandom) {
                    app.randomSong()
                    CDthumbanimate.play()
                    player.classList.add('playing')
                }else{
                    CDthumbanimate.play()
                    player.classList.add('playing')
                    app.nextSong()
                }
                audio.play()
                app.render() 
                app.scrollActive()           
            }
            // khi prev bài hát
            prevBtn.onclick = function () {
                if(app.isRandom) {
                    app.randomSong()
                    CDthumbanimate.play()
                    player.classList.add('playing')
                }else{
                    CDthumbanimate.play()
                    player.classList.add('playing')
                    app.prevSong()
                }
                audio.play()  
                app.render()  
                app.scrollActive()     
            }
            randomBtn.onclick = function () {
                  if(app.isRandom) {
                    app.isRandom = false
                    randomBtn.classList.remove('active')
                  }else{
                    app.isRandom = true
                    randomBtn.classList.add('active')
                  }
            }
            audio.onended = function() {
                if (app.isRpeat){
                    audio.play()
                }else{
                    nextBtn.click()
                }
            }

            repeatBtn.onclick = function () {
                  app.isRpeat = !app.isRpeat
                  repeatBtn.classList.toggle('active', app.isRpeat)
            }

            

    },
    nextSong: function () {
        this.currentSongindex++;
        if (this.currentSongindex >= this.songs.length) {
            this.currentSongindex = 0
        }
        this.loadCurrentsong()
    },
    prevSong: function () {
        this.currentSongindex--;
        if (this.currentSongindex < 0) {
            this.currentSongindex = this.songs.length - 1
        }
        this.loadCurrentsong()
    },

    randomSong: function () {
        do {
            var playRandom = Math.floor(Math.random() * this.songs.length)
        }while(playRandom === this.currentSongindex)
        this.currentSongindex = playRandom 
        this.loadCurrentsong()
    },
    scrollActive: function () {
         setTimeout (() => {
             $('.song.active').scrollIntoView({
                 behavior: 'smooth',
                 block: 'end',
             })
         }, 300)
    },



    start: function () {

        this.defineProperties()

        this.loadCurrentsong()

        this.handleEvents()

        this.render()

    }
    
}

app.start()
