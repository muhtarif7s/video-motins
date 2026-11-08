import { loadFont } from '@remotion/google-fonts/Cairo';
import {
  AbsoluteFill,
  Audio,
  interpolate,
  interpolateColors,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const { fontFamily } = loadFont();

export const MainVideo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const backgroundColor = interpolateColors(
    frame,
    [0, 150, 300],
    ['#0f172a', '#1e1b4b', '#0f172a'],
  );
  const textOpacity = interpolate(frame, [30, 60, 240, 270], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        volume={0.3}
      />
      <div
        dir="rtl"
        style={{
          opacity: textOpacity,
          transform: `scale(${scale})`,
          fontFamily,
          color: 'white',
          fontSize: 90,
          fontWeight: 'bold',
          textAlign: 'center',
          textShadow: '0px 4px 20px rgba(0,0,0,0.5)',
        }}
      >
        مرحباً بكم في
        <br />
        <span dir="ltr" style={{ color: '#38bdf8' }}>
          video-motins
        </span>
      </div>
    </AbsoluteFill>
  );
};