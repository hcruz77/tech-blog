const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const content = document.querySelector('#project-desc').value.trim();
  const id = document.querySelector('#postId').value.trim();
  console.log(id);


  if (title && content) {
    const response = await fetch(`/api/posts/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to update post');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', updateFormHandler);