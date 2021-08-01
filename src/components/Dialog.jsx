import { useEffect, useRef, useState } from 'react';

function Dialog(props) {
  const [name, setName] = useState(props.data.name ?? "");
  const [telp, setTelp] = useState(props.data.telp ?? "");
  const [tag, setTag] = useState(props.data.tag ?? "family");
  // INFO: props.data.id ada, berarti dialognya buat ngedit, klo id nya ga ada, berarti add new
  // INFO: props.data.icon
  const nameInput = useRef(null);

  useEffect(() => {
    nameInput.current.focus();
  }, []);

  return (
    <div className="absolute w-96 mx-auto top-20 shadow-lg bg-white">
      <div className="flex justify-center text-2xl mb-2">
        <p>Add New</p>
      </div>
      <div>
        <div className="mx-2">
          <label htmlFor="nama">Nama: </label>
          <input ref={nameInput} name="nama" className="outline-none p-1 border-2 rounded-lg border-gray-600 my-1" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="mx-2">
          <label htmlFor="telp">Telp: </label>
          <input name="telp" className="outline-none p-1 border-2 rounded-lg border-gray-600 my-1" value={telp} onChange={e => setTelp(e.target.value)}/>
        </div>
        <div className="mx-2">
          <label htmlFor="tag">Tag: </label>
          <select
          name="tag"
          className="outline-none p-1 border-2 rounded-lg border-gray-600 my-1"
          value={tag}
          onChange={e => setTag(e.target.value)}
          >
            <option value="family">Keluarga</option>
            <option value="relative">Teman Dekat</option>
            <option value="other">Orang Lain</option>
          </select>
        </div>

      </div>
      <div className="mt-8 flex justify-around">
        <button className="text-white bg-green-500 active:bg-green-700 w-full p-2 rounded-none" onClick={() => props.onConfirm({name, telp, tag, icon: props.data.icon, id: props.data.id  })}>OK</button>
        <button className="text-white bg-red-400 active:bg-red-600 w-full p-2 rounded-none" onClick={() => props.onCancel()}>Cancel</button>
      </div>
    </div>
  );
}

export default Dialog;
