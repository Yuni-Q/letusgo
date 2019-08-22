import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import AnimatedMount from '../common/AnimatedMount';
import ScheduleSectionDetailInfo from './ScheduleSectionDetailInfo';
import { color } from '../common/color';
import ScheduleSectionDetailLink from './ScheduleSectionDetailLink';

const StyledScheduleSectionDetail = styled.div`
  overflow: hidden;
  transition: height 0.3s ease-out;
  height: 0px;
`;

const ScheduleSectionDetail = React.forwardRef(
  ({ show, infos, links, image, description }, ref) => {
    const youtubeLinks = links.filter(l => {
      return l.title === '영상';
    });
    const otherLinks = links.filter(l => {
      return l.title !== '영상';
    });
    const id =
      youtubeLinks[0] &&
      youtubeLinks[0].description &&
      youtubeLinks[0].description.split('https://youtu.be/')[1];
    return (
      description.length > 0 && (
        <StyledScheduleSectionDetail
          ref={ref}
          show={show}
          style={{
            padding: '15px 16px 0 96px',
            borderTop: show ? `1px solid ${color.veryLightPink}` : 0,
            margin: '24px 0 0 0 ',
            maxwidth: '100vw',
          }}
        >
          <div
            style={{
              padding: '0 0 16px 0',
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: '100vw',
                maxwidth: '100vw',
                maxWidth: '151px',
                height: '151px',
                padding: '0 0 16px 0',
              }}
            />
          </div>
          {!!id && (
            <div>
              <iframe
                id="ytplayer"
                type="text/html"
                width="100%"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
              />
            </div>
          )}
          <pre
            style={{
              padding: '0 0 16px 0',
              lineHeight: '22px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {description}
          </pre>
          <div style={{ marginBottom: '16px' }}>
            {otherLinks.map((link, idx) => {
              return (
                <ScheduleSectionDetailLink
                  key={idx}
                  title={link.title}
                  description={link.description}
                />
              );
            })}
          </div>
          <div style={{ marginBottom: '16px' }}>
            {infos.map((info, idx) => {
              return (
                <ScheduleSectionDetailInfo
                  key={idx}
                  title={info.title}
                  description={info.description}
                />
              );
            })}
          </div>
        </StyledScheduleSectionDetail>
      )
    );
  },
);

ScheduleSectionDetail.propTypes = {
  show: PropTypes.bool.isRequired,
  infos: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

// export default AnimatedMount(ScheduleSectionDetail);
export default ScheduleSectionDetail;
