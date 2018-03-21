$(document)
    .ready(function () {
        let count = 0;
        dummyNotification();
        bind('.mainContainer .useCaseContainer .useCase .buttonContainer .button.modal', () => {
            let text = $('.mainContainer .useCaseContainer .useCase .textBox.modal')
                .val()
                .trim();
            launchPopup(text);
        })
        bind('.mainContainer .modalContainer .modalButtonContainer .modalButton', () => {
            $('.overlay').hide();
            $('.modalContainer').hide();
            $('.modalContainer .modalContent').empty();
        })
        bind('.mainContainer .topBar .bell', () => {
            console.log('tapped');
            $('.mainContainer .topBar .count').text('');
            rb('.mainContainer .notificationTab', 'notificationTemplate', notificationData);
            notificationData.count = 0;
            $('.notificationTab').toggle();
            notificationData.notifications = [];
        })
        bind('.button.notification', () => {
            let notificationText = $('.textBox.notification')
                .val()
                .trim();
            notificationData.count++;
            $('.mainContainer .topBar .count').text(notificationData.count);
            if (notificationText !== '') {
                notificationData
                    .notifications
                    .unshift({notificationText: notificationText});
            } else {
                notificationData
                    .notifications
                    .unshift({notificationText: 'Hello this is a dummy notification'});
            }
            console.log(notificationData);
            rb('.mainContainer .notificationTab', 'notificationTemplate', notificationData);
        })
    })

function launchPopup(content) {
    $('.overlay').show();
    $('.modalContainer .modalContent').append(content);
    $('.modalContainer').show();
}
function dummyNotification() {
    notificationData.count++;
    $('.mainContainer .topBar .count').text(notificationData.count);
    notificationData
        .notifications
        .unshift({notificationText: 'Hello this is a dummy notification'});
    console.log(notificationData);
    rb('.mainContainer .notificationTab', 'notificationTemplate', notificationData);
    setTimeout(dummyNotification,5000);
}