import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, isLiked, isDelete} = props
  const {id, name, comment, isLike, date, color} = details
  const isToggled = () => {
    isLiked(id)
  }
  const time = formatDistanceToNow(date)

  const deleted = () => {
    isDelete(id)
  }

  return (
    <li className="comments-list">
      <div className="con1">
        <p className={`${color} initial`}>{name[0].toUpperCase()}</p>
        <p className="name">{name}</p>
        <p className="time">{time}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="con2">
        <button className="like-button" type="button" onClick={isToggled}>
          <img
            src={
              !isLike
                ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
            }
            alt="like"
          />
          <p className={isLike ? 'liked' : 'like'}>Like</p>
        </button>
        <button
          className="delete"
          type="button"
          onClick={deleted}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
