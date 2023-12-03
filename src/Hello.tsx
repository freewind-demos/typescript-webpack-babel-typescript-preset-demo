import {useState, FC} from 'react';

export const Hello: FC = () => {
  const [name, setName] = useState('');
  return <>
    <h1>Hello {name}</h1>
    <div>Input something in the text field, and change me to see if it's still kept</div>
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
  </>;
}
