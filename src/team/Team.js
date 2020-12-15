import './styles.css';
import Hexagon from 'react-hexagon';
import keane from './image/keanecjy.png';
import TeamHeader from '../component/header/SectionHeader';

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
    <div className="team" id="team">
      <TeamHeader sectionHeader={'Team'} translateX={'translateX(13px)'} />
      <div className="container">
        {picture(keane, 'sample description')}
        {picture()}
        {picture()}
      </div>
    </div>
  );
};

export default Team;
