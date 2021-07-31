import { useState } from 'react';
import './App.css';
import Dialog from './components/Dialog';
import MenuItem from './components/MenuItem';

function App() {
  const [title, setTitle] = useState("Buku Telepon");
  const [phoneList, setList] = useState([]);
  const [idGen, setId] = useState(0);
  const [dialogFlag, setDialogState] = useState(false);

  function addItem(name, telp) {
    setList([
      ...phoneList,
      {
        name,
        telp,
        icon: "/img/pol.png",
        id: idGen,
      }
    ]);
    setId(idGen + 1);
    closeDialog();
  }

  function removeItem(id) {
    console.log("Remove This Item", id);
    setList(phoneList.filter(item => item.id !== id));
  }

  function openDialog() {
    setDialogState(true);
  }

  function closeDialog() {
    setDialogState(false);
  }

  return (
    <div className="m-auto w-2/4 border-2 border-black">
      <header className="font-bold border-b-2 border-black text-center h-10">
        <h1>{title}</h1>
      </header>
      {
        phoneList.length === 0 && <p>Click + to add some list!</p>
      }
      <main>
        {
          phoneList.map(item => <MenuItem
            {...item} //  spread operator
            key={item.id}
            onDelete={removeItem}
          />)
        }
      </main>
      <div>
        <button onClick={() => openDialog()} className="rounded-full bg-blue-400 text-white fixed right-2 bottom-2 h-10 w-10">+</button>
      </div>
      {
        dialogFlag &&
        <Dialog
          onConfirm={(name, telp) => addItem(name, telp)}
          onCancel={() => closeDialog()}
        />
      }
    </div>
  );
}

export default App;
