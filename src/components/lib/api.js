import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

export function getAllActivities() {
  return axios.get(`${baseUrl}/activities`)
}

export function getSingleActivity(activityId) {
  return axios.get(`${baseUrl}/activities/${activityId}`)
}

export function createActivity(formdata) {
  return axios.post(`${baseUrl}/activities`, formdata, headers())
}

export function editActivity(activityId, formdata) {
  return axios.put(`${baseUrl}/activities/${activityId}`, formdata, headers())
}

export function deleteActivity(activityId) {
  return axios.delete(`${baseUrl}/activities/${activityId}`, headers())
}

export function createComment(activityId, formdata) {
  return axios.post(`${baseUrl}/activities/${activityId}`, formdata, headers())
}

export function getComments(activityId, formdata) {
  return axios.get(`${baseUrl}/activities/${activityId}`, formdata, headers())
}

export function submitComment(activityId, formdata) {
  return axios.post(`${baseUrl}/activities/${activityId}/comment`, formdata, headers())
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}
