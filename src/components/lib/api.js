import axios from 'axios'

const baseUrl = '/api'

export function getAllActivities() {
  return axios.get(`${baseUrl}/activities`)
}

export function getSingleActivity(id) {
  return axios.get(`${baseUrl}/activities/${id}`)
}
