import React from 'react';

/* eslint-disable */
function AnimatedMount(Component) {
  return class extends React.Component {
    state = {
      shouldRender: this.props.isMounted,
    };

    componentDidUpdate(prevProps) {
      if (prevProps.isMounted && !this.props.isMounted) {
        setTimeout(
          () => this.setState({ shouldRender: false }),
          this.props.delayTime,
        );
      } else if (!prevProps.isMounted && this.props.isMounted) {
        this.setState({ shouldRender: true });
      }
    }

    render() {
      return this.state.shouldRender ? (
        <div style={{ backgroundColor: 'white' }}>
          <Component {...this.props} />
        </div>
      ) : null;
    }
  };
}
export default AnimatedMount;
/* eslint-enable */
