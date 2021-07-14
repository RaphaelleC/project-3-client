import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { deleteActivity, getSingleActivity } from '../lib/api'
import { isCreator } from '../lib/auth'
import Error from '../common/Error'
import Comments from './ActivityComments'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

function ActivityShow() {
  const history = useHistory()
  const { activityId } = useParams()
  const [activity, setActivity] = React.useState(null)

  const [isError, setIsError] = React.useState(false)
  const isLoading = !activity && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSingleActivity(activityId)
        setActivity(data)
      } catch (e) {
        setIsError(true)
      }
    }
    getData()
  }, [activityId])

  const handleDelete = async () => {
    await deleteActivity(activityId)
    history.push('/')
  }

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            {isError && <Error />}
            {isLoading && <p>...loading</p>}
            {activity && (
              <div>
                <h2 className="title has-text-centered">{activity.activityName}</h2>
                <hr />
                <figure className="image">
                  <img src={activity.imageUrl} alt={activity.activityName} />
                </figure>
                <hr />
                <div className="columns">
                  <div className="column">
                    <div className="content is-medium">
                      <h4 className="title is-4 has-background-white-ter">
                        Country
                      </h4>
                      <p>{activity.country}</p>
                      <br />
                      <h4 className="title is-4 has-background-white-ter">
                        Description
                      </h4>
                      <p className="text-justified">{activity.description}</p>
                      <h4 className="title is-4 has-background-white-ter">
                        Categories
                      </h4>
                      <div>{activity.categories.map(category => <span key={category._id} className="tag is-primary is-light is-medium">{category}</span>)}</div>
                      <br />
                      <h4 className="title is-4 has-background-white-ter">Created by</h4>
                      <p>{activity.user.username}</p>
                    </div>
                    {isCreator(activity.user._id) ? (
                      <div className="buttons">
                        <Link to={`/activities/${activityId}/edit`} className="button has-text-white has-background-success-dark">
                          Edit my activity
                        </Link>
                        <div>
                          <button onClick={handleClickOpen} className="button is-danger">
                            Delete my activity
                          </button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                          >
                            <DialogTitle>{'Delete this activity ?'}</DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                This will permanently delete the activity from the website.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>
                                No
                              </Button>
                              <Button onClick={handleDelete}>
                                Yes, delete
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </div>)
                      :
                      ''
                    }
                  </div>
                  <div className="column is-half">
                    <h4 className="title is-4">Comments</h4>
                    {
                      activity.comments.map(comment => <p key={comment._id}>{comment.text} <br /><small>{comment.createdAt}</small></p>)
                    }
                    <div>
                      <Comments />
                      <div className="column">
                        <p>MAP FOR YOUR ACTIVITIES COMING VERY SOON !</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActivityShow
