import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

export function getAllActivities() {
  return axios.get(`${baseUrl}/activities`)
}

export function getSingleActivity(id) {
  return axios.get(`${baseUrl}/activities/${id}`)
}

export function createActivity(formdata) {
  return axios.post(`${baseUrl}/activities`, formdata, { headers: { Authorization: `Bearer ${getToken()}` },
  })
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}