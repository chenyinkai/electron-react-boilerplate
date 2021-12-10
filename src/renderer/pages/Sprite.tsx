import { useState } from 'react';
import style from './style.module.scss';

function Sprite() {
  const [savedPath, setSavedPath] = useState('');
  const [imgNum, setImgNum] = useState(0);

  async function getSavedPath() {
    const path = await window.electron.sprite.getSavedDir();
    setSavedPath(path);
  }

  async function getImages() {
    const imageNum = await window.electron.sprite.getMultipleImgs();
    setImgNum(imageNum);
  }

  async function saveFiles() {
    await window.electron.sprite.saveFiles();
    window.alert('success');
  }

  return (
    <div className={style.sprite}>
      <h1>Sprite</h1>
      <h3 className="desc">
        Sprite reads a lots of PNG files and generates a JSON layout file and
        PNG spritesheet.
      </h3>
      <div className="step-row">
        <div className="step-btns">
          <div>Step1：</div>
          <button tabIndex={0} type="button" onClick={getSavedPath}>
            get saved directory
          </button>
        </div>
        <div>Files will be saved in {savedPath}</div>
      </div>
      <div className="step-row">
        <div className="step-btns">
          <div>Step2：</div>
          <button tabIndex={0} type="button" onClick={getImages}>
            get images
          </button>
        </div>
        <div>You have selected {imgNum} pictures</div>
      </div>
      <div className="step-row">
        <div className="step-btns">
          <div>Step3：</div>
          <button tabIndex={0} type="button" onClick={saveFiles}>
            save files
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sprite;
