// const users = [
//     {
//         "username": "harmonyCobel",
//         "fullname": "Harmony Cobel",
//         "password": "praisekier",
//         "role": "Head of the Severed Floor",
//         "gender": "F"
//     },
//     {
//         "username": "sethMilchick",
//         "fullname": "Seth Milchick",
//         "password": "ItsNotMilkshake!",
//         "role": "Supervisor of the Severed Floor",
//         "gender": "M"
//     },
//     {
//         "username": "username",
//         "fullname": "User de User",
//         "password": "password",
//         "role": "Test User",
//         "gender": "M"
//     }
// ]

const form = document.getElementById("intranet-fields")
const errorLabel = document.querySelector("label");
const errorMessage = "Invalid credentials!"

async function getUsers()
{
    try
    {
        const response = await fetch("/data/users.json");
        const users = await response.json();
        return users;
    }
    catch (error)
    {
        console.error("Failed to load file!", error);
    }
}

function findUser(users, username, password)
{
    return users.find(user => user.username === username && user.password === password);
}


form.addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const usersList = await getUsers();
    const user = findUser(usersList, username, password)

    if (user)
    {
        errorLabel.innerHTML = "";
        let splitFullname = user.fullname.split(' ');
    
        let addressee = user.gender === "M" ? "Mr. " : "Ms. ";
        addressee += splitFullname[splitFullname.length - 1];
    
        alert(`Hello, ${addressee}`);
    }
    else
    {
        errorLabel.innerHTML = `${errorMessage}`;
        console.warn(`${errorMessage}`);
    }

    //alert(`The username is ${username}, and the password is ${password}.`);
    form.reset();
});