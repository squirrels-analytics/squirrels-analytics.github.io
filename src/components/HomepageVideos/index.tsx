import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '../styles.module.css';

type VideoItem = {
  description: string;
  video: string;
};

const VideoList: VideoItem[] = [
  {
    description: 'Creating a Squirrels project from scratch',
    video: require('@site/static/video/init_squirrels_project.mp4').default,
  },
  {
    description: 'Exploring the contents of a Squirrels project',
    video: require('@site/static/video/squirrels_project_content.mp4').default,
  },
  {
    description: 'Activating the Squirrels API server',
    video: require('@site/static/video/squirrels_api_server.mp4').default,
  }
];

function Video({ description, video }: VideoItem) {
    return (
      <div className="text--center padding-vert--md">
        <Heading as="h3">{description}</Heading>
        <video
          controls
          className={clsx(styles.video, 'responsive-video')}
          style={{
            width: '100%',
            maxWidth: '960px',
            height: 'auto',
            aspectRatio: '16 / 9',
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };

export default function HomepageVideos(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className='text--center' style={{ textDecoration: 'underline' }}>
          See Squirrels in Action with 30 Second Videos!
        </h1>
        {VideoList.map((props, idx) => (
          <Video key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}