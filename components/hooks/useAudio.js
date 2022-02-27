import { useState, useEffect } from 'react';
import { convertSecondsToHHMMSS } from '../helpers';

const useAudio = (url, vol) => {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [duration, setDuration] = useState('');

  const toggle = () => setPlaying(!playing);
  const muteToggle = () => setMuted(!muted);
  useEffect(() => {

    setAudio(new Audio(url)) // only call client

  })
  useEffect(() => {
    const favicon = document.querySelector('#favicon');
    const logo = document.querySelector('#logo');
    if (audio){
      if (playing) {
        audio.play();

      } else {
        audio.pause();

      }
      muted && vol > 0 ? (audio.muted = true) : (audio.muted = false);
      audio.volume = vol / 100;
    }

  }, [audio, playing, muted, vol]);

  useEffect(() => {
    audio && audio.addEventListener('loadedmetadata', () => {
      setDuration(convertSecondsToHHMMSS(audio.duration));
      setPlaying(false);
    });
    audio && audio.addEventListener('ended', () => setPlaying(false));
    audio && audio.addEventListener('timeupdate', () =>
      setCurrentTime(convertSecondsToHHMMSS(audio.currentTime))
    );

    return () => {
      audio && audio.removeEventListener('loadedmetadata', () => setDuration(''));
      audio && audio.removeEventListener('timeupdate', () => setCurrentTime(''));
      audio && audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio, currentTime, duration]);

  return [audio, playing, muted, toggle, muteToggle, currentTime, duration];
};

export default useAudio;
