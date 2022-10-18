const updateButtonHandler = async (event) => {
  if (event.target.hasAttribute('href')) {
  const id = event.target.getAttribute('href');
  
      const response = await fetch(`/api/update/${id}`, {
        method: 'POST',
      });

  if (response.ok) {
    document.location.replace('/update');
  } else {
    alert('failed to go to update');
  }
};
}

document.querySelector('#update').addEventListener('click', updateButtonHandler);




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


