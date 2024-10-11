document.getElementById('load-users-btn').addEventListener('click', loadUsers);

async function loadUsers() {
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    
    const users = data.results;
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <img src="${user.picture.thumbnail}" alt="User Picture">
            <div>
                <h2>${user.name.first} ${user.name.last}</h2>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        userList.appendChild(userCard);
    });
}