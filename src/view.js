import {searchPost} from "./config";
export function createUserPostDataPhotoMarkup(post, userData,photo) {
    let userPosts = `
        <div class="render-card">
             <div class="render">
                <img class="user-image" src="https://www.w3schools.com/howto/img_avatar.png" alt="user image">
                    <div class='user-render'>
                        <p class=' user-render__username'>${userData.username}</p>
                        <p class=' user-render__city'>${userData.address.city}</p>
                        <p class=' user-render__company'>${userData.company.name}</p>
                    </div>
                    <div class="user-info">
                        <p class=' user-render__email'>${userData.email}</p>
                        <p class=' user-render__website'>${userData.website}</p>
                        <div class="google-link"><a target="_blank"
                        href="${ searchPost.googleMapsUrl}${userData.address.geo.lat},${userData.address.geo.lng}">Googlemap link</a></div>
                    </div>
            </div>
             <div class="display">
                <img src="${photo.url}" alt="user photo">
                    <div class="wrap">
                        <p class="user-render__title">${post.title}</p>
                        <p class="user-render__body"><span class="body-span">${post.body}</span></p>
                    </div>
             </div>
        </div>
    `
        document.querySelector(".container").insertAdjacentHTML('afterbegin', userPosts);
    
    
    
};



export function clearPreviousUserData() {
    document.querySelector('.container').innerHTML = '' ;
}