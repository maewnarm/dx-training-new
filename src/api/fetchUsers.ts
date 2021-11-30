export async function getUsers() {
  const url = `https://jsonplaceholder.typicode.com/users`
  const fetchOptions = {
    method: "GET"
  }
  const res = await fetch(url,fetchOptions)
  if (res.status !== 200) throw new Error(res.statusText)
  
  const data = await res.json()

  return data
}