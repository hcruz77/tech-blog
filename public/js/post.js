const update = async () => {

  const response = await fetch('/api/post/update/id', {
    method: 'PUT',
    headers: { 'title-type, Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/update');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#update').addEventListener('click', update);




const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('#delete')
  .addEventListener('click', delButtonHandler);


