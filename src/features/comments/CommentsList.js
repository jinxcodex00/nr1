import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./commentsSlice";
<<<<<<< HEAD
import { CommentForm } from "./CommentForm";

=======
import { CommentsList } from './CommentsList';
>>>>>>> d62689038db221dd41599f793c50dc6840e2bc63

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsiteId);
  if (comments && comments.length > 0) {
    return (
      <Col md="5" className="m-1">
        <h4>Comments</h4>
        {comments.map((comment) => {
<<<<<<< HEAD
            return <Comment key={comment.id} comment={comment} />;
=======
          return <Comment key={comment.id} comment={comment} />;
        <CommentsList />;
        })}
>>>>>>> d62689038db221dd41599f793c50dc6840e2bc63
      </Col>
    );
  }
};

<CommentForm campsiteId = {campsiteId} />

export default CommentsList;