var defaultCity = '兴义'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}
export default {
  city: defaultCity
}
