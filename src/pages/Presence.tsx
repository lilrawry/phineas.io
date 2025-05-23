import { Helmet } from 'react-helmet';
import PageWrapper from './PageWrapper';

const Presence = () => (
  <PageWrapper forceReadableWidth>
    <Helmet>
      <title>Presence</title>
    </Helmet>
    <h1>👀 Presence</h1>
    <p>
      You may have noticed that while I am engaged in activities such as listening to Spotify, programming in
      VSCode or playing a game, the activity appears in the bottom left of this site. This functionality is powered by an
      open-source project I created called{' '}
      <a target="_blank" rel="noreferrer" href={'https://github.com/phineas/lanyard'}>
        Lanyard
      </a>{' '}
      which pulls live presences from Discord and updates an API and WebSocket service. Setup requires
      less than 10 seconds and simply involves joining a Discord server.
    </p>
  </PageWrapper>
);

export default Presence;
