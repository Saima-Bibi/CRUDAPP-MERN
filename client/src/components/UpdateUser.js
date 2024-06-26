import React from 'react'

export default function UpdateUser({value, handleChange, handleSubmission}) {

  
    

    

  return (
    <>
       
       <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleSubmission}>
                            <div className="modal-header">
                                <h4 className="modal-title">Update User</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true"  style={{marginLeft:'180px'}}>&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text"  name='name' value={value.name} onChange={handleChange}  className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text"  name='password' value={value.password} onChange={handleChange}  className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text"  name='email' value={value.email} onChange={handleChange}   className="form-control" />

                                </div>
                                <div className="form-group">
                                    <label>Phone</label>

                                    <input type="text"  name='phone' value={value.phone} onChange={handleChange}  className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-primary" value="Update" data-bs-dismiss="modal" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

    </>
  )
}
