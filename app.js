// Init Github
const github = new GitHub;
const ui = new UI;

const searchUser = document.getElementById('searchUser').addEventListener('keyup', (e) => {
    const userText = e.target.value
    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //show alert
                    ui.showProfile(data.profile)
                    ui.showRepos(data.repos);
                }
            })
    } else {
        //clear profile
        ui.clearProfile();
    }
})