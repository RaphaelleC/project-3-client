import React from 'react'
import { getComments, submitComment } from '../lib/api'
import { useParams } from 'react-router-dom'

function Comments() {
  const { activityId } = useParams()
  const [comments, setComments] = React.useState(null)
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      const response = await getComments(activityId)
      setComments(response.data.comments)
    }
    getData()
  }, [activityId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await submitComment(activityId, { text })
      const response = await getComments(activityId)
      setComments(response.data.comments)
      setText('')
    } catch (err) {
      err
    }
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }


  return (
    <>
      {comments ?
        <form onSubmit={handleSubmit}>
          {comments.map(comment => {
            return <p key={comment._id}>{comment.text}<br /><small>{comment.createdAt}</small></p>
          })}
          <textarea value={text} onChange={handleChange} placeholder="Add a comment" name="comments" />
          <button>Add Comment
          </button>
        </form>
        :
        <div>...loading comments form</div>
      }
    </>
  )
}

export default Comments
