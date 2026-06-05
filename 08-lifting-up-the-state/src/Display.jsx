export default function Display(props) {
    return <>
        <ul>
            <li>Email:{props.email}</li>
            <li>Password:{props.password}</li>
        </ul>
    </>
}