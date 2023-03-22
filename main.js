const amount = document.querySelector('.not-amount');
const markRead = document.querySelector('.mark-read');
const unread = document.querySelector('.unread');
const notification = document.querySelectorAll('.notification')

let counter = 0;


//This function removes 'unread' for all notification.
function markAllAsRead(){
    markRead.addEventListener('click', () => {
        for(let i = 0; i < notification.length; i++){
            if(notification[i].classList.contains('unread')){
                notification[i].classList.remove('unread');
                amount.textContent = "0";
            }
        }
    });
}

function markAsRead(){
    countUnreads();
    amount.textContent = counter;

    for(let i = 0; i < notification.length; i++){
        notification[i].addEventListener('click', () =>{
            if(notification[i].classList.contains('unread')){
                notification[i].classList.remove('unread');
                counter--;  
            }
            amount.textContent = counter;
        });
    }

}


//This function counts the amount of unread notifications.
function countUnreads(){
    for(let i = 0; i < notification.length; i++){
        if(notification[i].classList.contains('unread')){
            counter++;
        }
    } 
}


markAllAsRead();
markAsRead();