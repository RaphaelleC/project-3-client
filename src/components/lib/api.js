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

export function getSingleActivity(id) {
  return axios.get(`${baseUrl}/activities/${id}`)
}

export function createActivity(formdata) {
  return axios.post(`${baseUrl}/activities`, formdata, headers())
}

export function editActivity(id, formdata) {
  return axios.put(`${baseUrl}/activities/${id}`, formdata, headers())
}

export function deleteActivity(id) {
  return axios.delete(`${baseUrl}/activities/${id}`, headers())
}

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/login`, formdata)
}
