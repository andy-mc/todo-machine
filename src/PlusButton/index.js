import './PlusButton.css';

function PlusButton({action}) {
  return (
    <button className="PlusButton" onClick={action}>+</button>
  )
}

export {PlusButton}
