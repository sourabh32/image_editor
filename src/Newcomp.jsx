import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doIntendedTask } from './redux/slices/intendedTask';

const ImageUploadComponent = () => {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.intendedReducer.imageData);
  const status = useSelector((state) => state.intendedReducer.status);
  const error = useSelector((state) => state.intendedReducer.error);

  const handleFetchImage = async () => {
    const inputElement = document.getElementById('fileInput');
    const photo = inputElement.files[0];
    const form = new FormData();
    form.append('prompt', 'in indian temple');
    form.append('image_file', photo);
    const endpoint = 'https://clipdrop-api.co/replace-background/v1'
    dispatch(doIntendedTask({form,endpoint}));
  };

  return (
    <div>
      <input type="file" id="fileInput" />
      <button onClick={handleFetchImage}>Upload and Replace Background</button>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <img src={imageData} alt="Processed Image" />}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
};

export default ImageUploadComponent;
