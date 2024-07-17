async function getAllUsers(){
   try {
    const responce = await fetch(
        // "https://jsonplaceholder.typicode.com/users"
        "https://api.github.com/users/vaibhavkothari33"
    )

    const data = await responce.json()
    console.log(data.followers);
    console.log(data.following);
    console.log(data.location);
    console.log(data.avatar_url);
    console.log(data.bio);
   } catch (error) {
        console.log("ERROR ",error);
   }
}
getAllUsers()

