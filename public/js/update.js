const updateFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const content = document.querySelector('#project-desc').value.trim();


  if (title && content) {
    const response = await fetch(`/api/update/${id}`, {
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