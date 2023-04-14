import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', comment: ''}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  isToggle = id => {
    this.setState(prevState => ({
      list: prevState.list.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onDelete = id => {
    const {list} = this.state
    const filteredResult = list.filter(each => each.id !== id)
    this.setState({list: filteredResult})
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialContainerBackgroundClassName =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLike: false,
      color: initialContainerBackgroundClassName,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {list, name, comment} = this.state
    return (
      <div className="main-container">
        <h1 className="heading">Comments</h1>
        <div className="container">
          <form className="form" onSubmit={this.addComment}>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              className="input"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={this.onChangeName}
            />
            <textarea
              rows="8"
              cols="40"
              placeholder="Your Comment"
              className="input"
              value={comment}
              onChange={this.onChangeComment}
            />
            <button className="button" type="submit">
              Add Comment
            </button>
          </form>
          <div className="Img-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="hr" />
        <p className="comments">
          <span className="span">{list.length}</span>
          Comments
        </p>
        <ul className="list">
          {list.map(each => (
            <CommentItem
              details={each}
              key={each.id}
              bgColor={initialContainerBackgroundClassNames}
              isLiked={this.isToggle}
              isDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
