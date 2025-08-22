import React from "react";
import { Table } from "react-bootstrap";

function Education(){
    return (
  <div className="mt-4">
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Percentage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>B.E Telecommunication</td>
                <td>NMU University</td>
                <td>2025</td>
                <td>8.30 CGPA</td>
            </tr>
            <tr>
                <td>12th</td>
                <td>NMU University</td>
                <td>2022</td>
                <td>82%</td>
            </tr>
            <tr>
                <td>10th</td>
                <td>NMU University</td>
                <td>2020</td>
                <td>71%</td>
            </tr>

        </tbody>
    </Table>
  </div>
    )


}


export default Education;