export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function loader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    redirect("/auth");
  }

  return null;
}
