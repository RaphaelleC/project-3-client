import axios from 'axios'

const baseUrl = 'http://localhost:4000/api'

export function getAllActivities() {
  return axios.get(`${baseUrl}/activities`)
}

export function getSingleActivity(id) {
  return axios.get(`${baseUrl}/activities/${id}`)
}

export function getSummerActivities() {
  return axios.get(`${baseUrl}/activities/search?season=Summer`)
}

export function getWinterActivities() {
  return axios.get(`${baseUrl}/activities/search?season=Winter`)
}