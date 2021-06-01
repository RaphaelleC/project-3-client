import React from 'react'
import { getComments, submitComment } from '../lib/api'
import { useParams } from 'react-router-dom'


function Comments() {
  const { activityId } = useParams()
  const [comments, setComments] = React.useState(null)
  const [text, setText] = React.useState('')
  console.log(comments)

  React.useEffect(() => {
    const getData = async () => {
      const response = await getComments(activityId)
      console.log(response.data.comments)
      setComments(response.data.comments)
    }
    getData()
  }, [activityId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(e)
    try {
      await submitComment(activityId, { text })
      const response = await getComments(activityId)
      setComments(response.data.comments)
      setText('')
    } catch (err) {
      console.log(err)
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