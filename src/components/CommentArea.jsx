import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmYTJiN2IzOTczNDAwMTRkNWU3ZmYiLCJpYXQiOjE2OTg2NjkyMzksImV4cCI6MTY5OTg3ODgzOX0.ZGN7sB5Mxv0CfNlLEMQMiMF314wMTRzrgyVx1WyPgLk",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  componentDidUpdate(prepo) {
    if (prepo.stato !== this.props.stato) {
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div className="text-center">
        <CommentList commentsToShow={this.state.comments} />
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
      </div>
    );
  }
}

export default CommentArea;
