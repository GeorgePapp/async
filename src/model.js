import {searchPost} from "./config";
import {createUserPostDataPhotoMarkup} from "./view";

export function getUserData(inputValue) {
  fetch(`${searchPost.postUrl}${inputValue}`)
    .then(response => response.json())
    .then((postArr) => {
      postArr.forEach(function (post) {
        fetch(`${searchPost.photosUrl}${post.id}`)
        .then(response => response.json())
        .then((img) => {
          fetch(`${searchPost.userUrl}${inputValue}`)
          .then(response => response.json())
          .then((userInfo) => {
                displayAllData(post, img, userInfo);
              })
          })
      })

    }).catch(Error => console.log('error'));
}

function displayAllData(userPost, postImg, userInfo) {
  createUserPostDataPhotoMarkup(userPost,userInfo,postImg[0]);
}