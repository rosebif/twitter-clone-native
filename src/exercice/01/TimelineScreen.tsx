import React from 'react';

import * as api from '../../api/';
import { StyleSheet, Text } from 'react-native';
import { Screen, TweetItem, ViewLoading } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

export default class TimelineScreen extends React.Component {
  state = {
    timeline: [],
  };

  componentDidMount() {
    this.fetchTimeline();
  }

  fetchTimeline = () => {
    this.props.api.fetchTimeline().then((timeline) => {
      this.setState({ timeline });
    });
  };

  handleTweetPress = (id: string) => {
    console.log('handlePress => ', id);
  };

  // 🥑  create a TweetItem component with this API:
  // <TweetItem item={item} handlePress={() => this.handleTweetPress(item.id_str)} />

  render() {
    const { timeline } = this.state;
    return (
      <Screen style={styles.screen}>
        {timeline.length == 0 ? (
          <ViewLoading />
        ) : (
          <ScrollView>
            <Text>{JSON.stringify(timeline, null, 4)}</Text>
          </ScrollView>
        )}
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
});

TimelineScreen.defaultProps = {
  api,
};
