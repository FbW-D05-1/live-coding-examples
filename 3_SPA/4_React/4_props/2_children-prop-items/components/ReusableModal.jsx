import "./styles/Modal.css";
// we can destructure and make {children} instead
export default function ReusableModal(props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">{props.children}</div>
    </div>
  );
}
