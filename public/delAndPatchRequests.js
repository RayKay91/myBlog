const deleteBtn = document.querySelector('#delete');
const updateBtn = document.querySelector('#patch');
const postTitle = document.querySelector('.postTitle');
const updateForm = document.querySelector('.update-form');
const cancelBtn = document.querySelector('.cancel');

const postId = postTitle.dataset.postid;
console.log('postId', postId);

deleteBtn.addEventListener('click', () => {
  fetch('/post/delete/' + postId, {
    method: 'DELETE',
  }).then(() => (window.location.pathname = '/posts'));
});

updateBtn.addEventListener('click', () => {
  updateForm.classList.toggle('hide');
});
