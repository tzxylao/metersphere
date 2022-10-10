import {get, post} from '../plugins/request'
const BASE_URL = '/project/';

export function getOwnerProjects() {
  return get("/project/get-owner-projects");
}

export function getProjectListAll() {
  return get(BASE_URL + 'list/all')
}

export function getUserProjectList(data) {
  return post(BASE_URL + 'list/related', data)
}

export function switchProject(data) {
  return post("/user/update/current", data)
}

export function getRelatedProject(param) {
  return post(`/project/list/related`, param);
}
