async function fetchProfileData() {
    //const url = "http://localhost:8080/data/profile.json";
    const url = "https://raw.githubusercontent.com/dsjsantos/js-developer-portfolio/main/data/profile.json";
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
