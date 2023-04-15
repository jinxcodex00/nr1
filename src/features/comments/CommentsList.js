import { Col, Row } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./commentsSlice";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CommentsList = ({ campsiteId }) => {
  const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

  const isLoading = useSelector((state) => state.comments.isLoading);
  const errMsg = useSelector((state) => state.comments.errMsg);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  } else if (errMsg) {
    return (
      <Row>
        <Error errMsg={errMsg} />
      </Row>
    );
  } else if (comments) {
    return isLoading ? (
      <Loading />
    ) : errMsg ? (
      <Error errMsg={errMsg} />
    ) : (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
        <CommentForm campsiteId={campsiteId} />
      </Col>
    );
  }

  return (
    <Col md="5" className="m-1">
      There are no comments for this campsite yet.
    </Col>
  );
};

export default CommentsList;
