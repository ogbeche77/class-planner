import React, { useState } from "react";

const TimeDetailsPage = (props) => {
  const [rowDelete, setRowDelete] = useState(props.week.timeDetails);

  const deleteUser = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/class/${id}`, {
      method: "DELETE",
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then(setRowDelete(rowDelete.filter((item) => item.id !== id)));
  };

  const editUser = (number, id) => {
    const body = JSON.stringify({
      id,
    });
    fetch(`http://localhost:22666/week/${number}/class/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body,
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then();
  };

  return (
    <div>
      <table className="table table-striped time-table table-hover">
        <thead>
          <tr>
            <th scope="col">Start Time</th>
            <th scope="col">Finish Time</th>
            <th scope="col">Class Type</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {rowDelete &&
            rowDelete.length > 0 &&
            rowDelete.map((time, index) => {
              const { id, start, end, type } = time;
              return (
                <tr key={index}>
                  <td>{start}</td>
                  <td>{end}</td>
                  <td>{type}</td>
                  <td>
                    <button
                      className="btn btn-info col-9 margin-button"
                      onClick={() => editUser(props.week.week, id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger col-9 margin-button"
                      onClick={() => deleteUser(props.week.week, id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TimeDetailsPage;
