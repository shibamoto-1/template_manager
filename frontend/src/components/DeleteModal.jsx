export default function DeleteModal({ modalRef, handleCloseModal, onConfirm, title, message="" }) {
  return (
    <dialog ref={modalRef}  className="modal">
      <div className="modal-box text-center">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{message}</p>

          <div className="flex justify-center gap-10">
            <button className="btn" onClick={handleCloseModal}>Close</button>
            <button className="btn btn-error" onClick={onConfirm}>削除</button>
          </div>

      </div>
    </dialog>
  )
}
