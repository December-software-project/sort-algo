import './styles.css';
import SectionHeader from '../visualizer/sortingvisualizer/component/header/SectionHeader';
import Hexagon from 'react-hexagon';
import keane from './image/keanecjy.png';

const Team = () => {
  const picture = (img, description) => (
    <div className="inner">
      <div className="item">
      <Hexagon
        className="picture"
        style={{ stroke: '#3558CB', strokeWidth: 4 }}
        backgroundImage={img}
      />
      </div>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="team">
      <SectionHeader name="Team" />
      <div className="container">
        {picture(keane, 'sample description')}
        {picture()}
        {picture()}
      </div>
    </div>
  );
};

export default Team;
