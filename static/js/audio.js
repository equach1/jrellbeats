jQuery(function($) {

    var ghost = document.getElementById("ghost").src;
    var page = document.getElementById("page").src;
    var around = document.getElementById("thistime").src;

    var supportsAudio = !!document.createElement('audio').canPlayType;
    if(supportsAudio) {
      var index = 0,
      playing = false,
      tracks = [
        {"track":1,"name":"Ghostride","length":"2:17","file": ghost},
        {"track":2,"name":"Page 9","length":"2:39","file": page},
        {"track":3,"name":"This Time Around","length":"2:05","file": around}
      ],
      trackCount = tracks.length,
      npAction = $('#npAction'),
      npTitle = $('#npTitle'),
      audio = $('#audio1').bind('play', function() {
        playing = true;
        npAction.text('Now Playing:');
      }).bind('pause', function() {
        playing = false;
        npAction.text('Paused:');
      }).bind('ended', function() {
        npAction.text('Paused:');
        if((index + 1) < trackCount) {
          index++;
          loadTrack(index);
          audio.play();
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }).get(0),btnPrev = $('#btnPrev').click(function() {
        if((index - 1) > -1) {
          index--;
          loadTrack(index);
          if(playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      btnNext = $('#btnNext').click(function() {
        if((index + 1) < trackCount) {
          index++;
          loadTrack(index);
          if(playing) {
            audio.play();
          }
        } else {
          audio.pause();
          index = 0;
          loadTrack(index);
        }
      }),
      loadTrack = function(id) {
        $('.plSel').removeClass('plSel');
        $('#plTrack>div:eq(' + id + ')').addClass('plSel');
        npTitle.text(tracks[id].name);
        index = id;
        audio.src = tracks[id].file;
      },
      displayTrack = function(){
        var parent = $('#plTrack');
        $.each(tracks, function(i, track) {
          $('<div></div>').addClass('row')
          .append($('<div></div>').addClass('col-sm').text(track.name))
          .appendTo(parent);
        });
      },
      playTrack = function(id) {
        loadTrack(id);
        audio.play();
      };
  
      displayTrack();
      loadTrack(index);
    }
  });