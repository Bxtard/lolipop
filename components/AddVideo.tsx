import { ChangeEvent, useState } from 'react';

const AddVideo = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    fetch('/api/video'),
      {
        method: 'POST',
        Headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ url: text, name }),
      };
  };

  return (
    <div className=''>
      <div>
        <span>Name</span>
        <input type='text' name='name' onChange={handleChange1} />
      </div>
      <div>
        <span>Url</span>
        <input type='text' name='url' onChange={handleChange2} />
      </div>
      <button type='button' onClick={handleClick}>
        Upload
      </button>
    </div>
  );
};

export default AddVideo;
