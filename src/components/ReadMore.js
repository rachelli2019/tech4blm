import React, {Component} from 'react';
import './read-more.css';

const ELLIPSES = '…';
const SHOW_LESS_TEXT = 'Show Less';
const SHOW_MORE_TEXT = 'Read More';

export default class ReadMore extends Component {

  static defaultProps = {
    lineHeight: 1,
    readMoreCharacterLimit: 100,
    showLessButton: false
  }

  state = { 
    showingAll: false
  }

  componentDidMount() {
    this.setState({showingAll: false})
  }
  
  toggleReadMore = () => {
    this.setState({
      showingAll: !this.state.showingAll
    });
  }

  _getReadMoreParts = ({text, readMoreCharacterLimit}) => {
      let teaserText;
      let remainingText;
      let remainingWordsArray = [];

      if (text) {
          const teaserWordsArray = text.split(' ');

          while (teaserWordsArray.join(' ').length > readMoreCharacterLimit ) {
              remainingWordsArray.unshift(teaserWordsArray.pop());
          }

          teaserText = teaserWordsArray.join(' ');

          if (remainingWordsArray.length > 0) {
              let str1 = remainingWordsArray.join(' ');
              remainingText = ' '.concat(str1);
          }
      }

      return {
          teaserText,
          remainingText
      };
  };

  getText = ({showingAll, text, readMoreCharacterLimit}) => {
    let {
      teaserText,
      remainingText
     } = this._getReadMoreParts({text, readMoreCharacterLimit});

    if (!showingAll && text.length > readMoreCharacterLimit) {
      return (
        <span>
          {teaserText.replace(/\s*$/, "")}
          <span className="read-more__text--remaining read-more__text--hide">
            {remainingText}
          </span>{ELLIPSES}
        </span>
      );
    }

    return (
      <span>
        {teaserText}
        <span className="read-more__text--remaining read-more__text--show">
          {remainingText}
        </span>
      </span>
    );
  }

  getActionButton = ({showingAll, showLessButton}) => {
    if (showingAll && !showLessButton) {
      return
    }

    let buttonText = showingAll ? SHOW_LESS_TEXT : SHOW_MORE_TEXT;

    return (
      <button 
        onClick={this.toggleReadMore}
        className="read-more__button"
        >
          {buttonText}
      </button>
    );
  }

  render () {
    let {
      text, 
      readMoreCharacterLimit, 
      showLessButton,
      // onContentChange,
      // numberOfLines,
      lineHeight,
      descHeight
    } = this.props;

    let { showingAll } = this.state;
    let height;
    // let showDescHeight = parseInt(descHeight) + 60;
    let showDescHeight = (text.length / 38 + 1 ) * 22
    if (showingAll){
      height =  showDescHeight;
    }
    else {
      height = descHeight
    }
    let style = {
      lineHeight,
      height: height,
    }
    console.log("style", style);
    let textToDisplay = this.getText({showingAll, text, readMoreCharacterLimit});
    let actionButton = this.getActionButton({showingAll, showLessButton});

    return (
      <div className="read-more" style={style}>
        {textToDisplay} {actionButton}
      </div>
    )
  };

};
