'use strict';

var React = require('react-native');

var {
  Image,
  StyleSheet,
  Text,
  View,
  Component,
  ListView,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  author: {
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  }
});

var FAKE_BOOK_DATA = [
  {volumeInfo: {title: 'The Catcher in the Rye', authors: "J. D. Salinger", imageLinks: {thumbnail: 'http://books.google.com/books/content?id=PCDengEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'}}}
];

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }
  componentDidMount() {
    var books = FAKE_BOOK_DATA;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(books)
    });
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderBook.bind(this)}
        style={styles.listView}
        />
    );
  }
}

module.exports = BookList;
