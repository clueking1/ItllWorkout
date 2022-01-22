(function() {
    var randomUser = [
        {
            firstName: 'Tom',
            lastName: 'Donasmith',
            age: 32,
            occupation: 'Attorney',
            distance: '13 Miles',
            lastWorkout: 'Thursday, January 20 at 2:40 PM CST',
            trainerNotes: "He's aight. Room to improve, but he's single.",
            bio : "I am looking for my perfect workout partner, someone who just wants to share a treadmill for a 20 minute workout.",
            picture: ""
        }, {
            firstName: 'Mike',
            lastName: 'Travers',
            age: 28,
            occupation: 'Physcian',
            distance: '4 Miles',
            lastWorkout: 'Wednesday, December 22 at 7:00 PM CST',
            trainerNotes: "Mike needs someone to workout with.",
            bio : "Hello, I am just your friendly neighborhood physician looking for love.",
            picture: ""
        }, {
            firstName: 'Chris',
            lastName: 'Thompson',
            age: 41,
            occupation: 'Unemployed',
            distance: '23 Miles',
            lastWorkout: 'Monday, January 11 at 8:40 AM ET',
            trainerNotes: "Chris works really hard. Harder then anyone else I know. In fact, it just seems like he really struggles with simple things.",
            bio : "I am looking for my perfect workout partner, someone who just wants to share a treadmill for a 20 minute workout.",
            picture: ""
        },
    ];

    var confirmButton = document.querySelector('[data-confirm]'),
        declineButton = document.querySelector('[data-decline]'),
        confirmationPopup = document.querySelector('.modal-container'),
        closeModalButton = document.querySelector('.noModal');

    populateFields();

    confirmButton.addEventListener('click', confirmUser);
    declineButton.addEventListener('click', declineUser);
    noModal.addEventListener('click', closePopup);

    function populateFields() {
        var user = randomUser[Math.floor(Math.random() * randomUser.length)];
        for (const [key, value] of Object.entries(user)) {
            var els = document.querySelectorAll('.' + key);
            els.forEach(el => {
                el.innerHTML = value;
            });
        }
    }

    function confirmUser() {
        confirmationPopup.classList.add('show');
    }

    function closePopup() {
        confirmationPopup.classList.remove('show');
        populateFields();
    }

    function declineUser() {

    }

})();
