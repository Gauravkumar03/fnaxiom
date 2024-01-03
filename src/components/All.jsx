import './Recent.css'

function All() {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Location</th>
                    <th scope="col">Email</th>
                    <th scope="col">Year</th>
                    <th scope="col">Acitons</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">John Doe</td>
                    <td>35</td>
                    <td>Engineer</td>
                    <td>New York</td>
                    <td>johndoe@example.com</td>
                    <td>2018</td>
                    <td>some action</td>
                </tr>
                <tr>
                    <td scope="row">Alice Smith</td>
                    <td>76</td>
                    <td>Designer</td>
                    <td>Company</td>
                    <td>San Francisco</td>
                    <td>alice.smith@example.com</td>
                    <td>some action</td>
                </tr>
                <tr>
                    <td scope="row">John Doe</td>
                    <td>35</td>
                    <td>Engineer</td>
                    <td>New York</td>
                    <td>johndoe@example.com</td>
                    <td>2018</td>
                    <td>some action</td>
                </tr>
                <tr>
                    <td scope="row">Alice Smith</td>
                    <td>76</td>
                    <td>Designer</td>
                    <td>Company</td>
                    <td>San Francisco</td>
                    <td>alice.smith@example.com</td>
                    <td>some action</td>
                </tr>
            </tbody>
        </table>
    )
}

export default All 