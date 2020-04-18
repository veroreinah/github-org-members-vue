import { API_URL } from "@/constants";

export function getMembers() {
  return fetch(`${API_URL}orgs/vuejs/public_members`).then((response) =>
    response.json()
  );
}

export function getMember(memberId) {
  return fetch(`${API_URL}users/${memberId}`).then((response) => {
    if (response.status === 404) {
      return Promise.reject(404);
    }
    return response.json();
  });
}
