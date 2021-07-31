import { useState } from 'react';

function Dialog(props) {
  const [name, setName] = useState("");
  const [telp, setTelp] = useState("");

  return (
    <div className="fixed w-96 mx-auto top-20 shadow-lg">
      <div>
        <p>Add New</p>
      </div>
      <div>
        <div>
          <label>Nama:</label>
          <input name="nama" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label>Telp:</label>
          <input name="telp" value={telp} onChange={e => setTelp(e.target.value)}/>
        </div>

      </div>
      <div className="mt-8 flex justify-around">
        <button onClick={() => props.onConfirm(name, telp)}>OK</button>
        <button onClick={() => props.onCancel()}>Cancel</button>
      </div>
    </div>
  );
}

export default Dialog;
