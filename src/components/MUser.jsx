import { useState } from "react"
const MUser = ({ salesMan }) => {
    console.log({ salesMan })
    return (
        <div className="modal fade" id="modalAsesor" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header justify-content-center ">
                        <div className="row ">
                            <div className="col-10">
                                <h5 className="modal-title modalheadertitle" id="exampleModalLabel">USUARIO QUE REGISTRO</h5>
                            </div>
                            <div className="col-2 modalheadertitle">
                                <a id="btnCerrarModal" data-bs-dismiss="modal" aria-label="Close" className="links card-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                    <ul key={salesMan.id}>
                            <li >
                                <b>NAME:</b> {salesMan.name}
                            </li>
                            <li >
                                <b>IDENTIFICATION:</b> {salesMan.identification}
                            </li>
                            <li >
                                <b>BIRTHDAY:</b> {salesMan.birthtDay}
                            </li>
                            <li >
                                <b>MONTHBIRTHDAY:</b> {salesMan.monthBirthtDay}
                            </li>
                            <li >
                                <b>ADDRESS:</b> {salesMan.address}
                            </li>
                            <li >
                                <b>CELLPHONE:</b> {salesMan.cellPhone}
                            </li>
                            <li >
                                <b>EMAIL:</b> {salesMan.email}
                            </li>
                            <li >
                                <b>PASSWORD:</b> {salesMan.password}
                            </li>
                            <li >
                                <b>ZONE:</b> {salesMan.zone}
                            </li>
                            <li >
                                <b>TYPE:</b> {salesMan.type}
                            </li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default MUser