import station_desktop from './station/station_desktop'
import station_tablet from './station/station_tablet'
import program_desktop from './program/program_desktop'

const layouts = [
  {
    type: 'station',
    media: 'desktop',
    components: station_desktop
  },
  {
    type: 'station',
    media: 'tablet',
    components: station_tablet
  },
  {
    type: 'program',
    media: 'desktop',
    components: program_desktop
  }
];

const getLayout = (type, media = 'deskop') => (
  layouts.find((item) => item.type === type && item.media === media)
);

export default getLayout;
