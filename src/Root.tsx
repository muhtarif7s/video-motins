import { Composition } from 'remotion';
import { MainVideo } from './MainVideo';

export const RemotionRoot = () => {
  return (
    <Composition
      id="MyVideo"
      component={MainVideo}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
    />
  );
};