let currentSection = '';
let uploadedFile = null;
let currentButton = null;

function editSection(section, button) {
  currentSection = section;
  currentButton = button;
  const fileInput = document.getElementById('file-input');
  
  // Set accepted file types based on the section
  if (section === 'video') {
    fileInput.setAttribute('accept', 'video/*');
  } else {
    fileInput.setAttribute('accept', 'application/pdf');
  }

  document.getElementById('edit-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('edit-modal').style.display = 'none';
  document.getElementById('file-input').value = ''; // Clear file input
  document.getElementById('preview').innerHTML = ''; // Clear preview
  document.getElementById('save-button').style.display = 'none'; // Hide save button
}

function uploadFile() {
  const fileInput = document.getElementById('file-input');
  const preview = document.getElementById('preview');

  if (fileInput.files.length > 0) {
    uploadedFile = fileInput.files[0];
    const fileURL = URL.createObjectURL(uploadedFile);

    if (currentSection === 'video') {
      preview.innerHTML = `<video controls><source src="${fileURL}" type="video/mp4">Your browser does not support the video tag.</video>`;
    } else {
      preview.innerHTML = `<embed src="${fileURL}" type="application/pdf" width="100%" height="400px" />`;
    }

    document.getElementById('save-button').style.display = 'block'; // Show save button
  } else {
    alert('Please select a file to upload.');
  }
}

function saveFile() {
  if (uploadedFile) {
    const fileURL = URL.createObjectURL(uploadedFile);
    const previewElement = currentSection === 'video' 
      ? `<video controls><source src="${fileURL}" type="video/mp4">Your browser does not support the video tag.</video>`
      : `<embed src="${fileURL}" type="application/pdf" width="100%" height="200px" />`;

    // Add preview to the main page section
    const previewContainer = document.createElement('div');
    previewContainer.className = 'file-preview';
    previewContainer.innerHTML = `
      ${previewElement}
      <button class="delete-button" onclick="deleteFile(this)">🗑️</button>
    `;
    currentButton.parentNode.insertBefore(previewContainer, currentButton.nextSibling);

    closeModal();
  } else {
    alert('No file uploaded to save.');
  }
}

function deleteFile(button) {
  if (confirm('Are you sure you want to delete this file?')) {
    button.parentNode.remove(); // Remove the preview container
  }
}

function editCourseName(courseNameElement) {
  const newName = prompt('Enter new course name:', courseNameElement.textContent.replace('🏫', '').trim());
  if (newName && confirm('Are you sure you want to change the course name?')) {
    courseNameElement.innerHTML = `<span class="edit-icon">🏫</span>${newName}`;
  }
}