import React from 'react'

export const  Contact = () => {
  return (
    <div>
        <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>SL</th>
          <th>Name of Employee</th>
          <th>Designation</th>
          <th>Qualification</th>
          <th>Experience (in Yrs)</th>
          <th>Phone No</th>
          <th>E-mail IDs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Dr. Satish V. Totar</td>
          <td>Librarian &amp; HOD</td>
          <td>M.L.I.Sc., M.phil, PGDLAN, KSET, Ph.D</td>
          <td>13.5</td>
          <td>9972500355</td>
          <td>satishtotar@klescet.ac,in</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Shri. R. B. Chinnannavar</td>
          <td>Asst. Librarian</td>
          <td>M.L.I.Sc.</td>
          <td>34</td>
          <td>9448691451</td>
          <td>ravibc67@yahoo.co.in</td>
        </tr>
        {/* <!-- Add more rows for other employees --> */}
      </tbody>
    </table>
  </div>
    </div>
  )
}
